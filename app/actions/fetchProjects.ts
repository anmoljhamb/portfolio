"use server";

import { Project } from "@/app/types";
import { githubProjects } from "../data/projects";

const GITHUB_API_URL = "https://api.github.com";

function extractImageUrls(
  readme: string,
  owner: string,
  repo: string,
): string[] {
  const urls = new Set<string>();

  // Match Markdown image syntax ![alt](url)
  const markdownRegex = /!\[.*?\]\((.*?)\)/g;
  let match;
  while ((match = markdownRegex.exec(readme)) !== null) {
    urls.add(match[1]);
  }

  // Match <img src="url">
  const htmlImgRegex = /<img[^>]*src=["']([^"']+)["']/g;
  while ((match = htmlImgRegex.exec(readme)) !== null) {
    urls.add(match[1]);
  }

  // Normalize relative URLs
  const baseUrl = `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/`;
  return Array.from(urls).map((url) => {
    if (url.startsWith("http")) return url;
    return baseUrl + url.replace(/^\.?\//, ""); // remove './' or '/' prefix
  });
}

export async function fetchProjectFromGitHub(
  repoUrl: string,
): Promise<Project | null> {
  try {
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error("Invalid GitHub URL");

    const [, owner, repo] = match;

    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "nextjs-server-action",
      Accept: "application/vnd.github+json",
    };

    const [repoRes, readmeRes, topicsRes] = await Promise.all([
      fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}`, { headers }),
      fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/readme`, { headers }),
      fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}/topics`, {
        headers: {
          ...headers,
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }),
    ]);

    if (!repoRes.ok || !readmeRes.ok)
      throw new Error("GitHub API request failed");

    const repoData = await repoRes.json();
    const readmeData = await readmeRes.json();
    const topicsData = await topicsRes.json();

    const readmeContent = Buffer.from(readmeData.content, "base64").toString(
      "utf8",
    );
    const lines = readmeContent
      .split("\n")
      .filter((line) => !line.includes("screenshot.png"))
      .filter((line) => !line.startsWith("<!--"));

    const firstLine = lines[0];
    const name = firstLine.replace(/^#\s*/, "").trim() || repoData.name;

    const images = extractImageUrls(readmeContent, owner, repo);

    const project: Project = {
      id: repoData.id,
      name,
      images,
      projectSummary: repoData.description || "No description provided.",
      projectReadme: lines.join("\n"),
      sourceCodeLink: repoData.html_url,
      demoLink: repoData.homepage || null,
      techStack: topicsData.names || [],
      dateMade: repoData.created_at,
      stars: repoData.stargazers_count,
      watchers: repoData.subscribers_count,
      forks: repoData.forks_count,
    };

    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}
export async function fetchAllProjects() {
  const links = githubProjects;
  const promises = links.map((link) => fetchProjectFromGitHub(link));

  return Promise.all(promises);
}
