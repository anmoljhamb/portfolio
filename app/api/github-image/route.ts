import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
        return NextResponse.json(
            { error: "URL parameter is required" },
            { status: 400 },
        );
    }

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed to fetch image: ${response.statusText}` },
                { status: response.status },
            );
        }

        const contentType = response.headers.get("content-type");
        const arrayBuffer = await response.arrayBuffer();

        return new NextResponse(arrayBuffer, {
            status: 200,
            headers: {
                "Content-Type": contentType || "image/png",
                "Cache-Control": "public, max-age=86400, immutable",
            },
        });
    } catch (error) {
        console.error("Error proxying image:", error);
        return NextResponse.json(
            { error: "Failed to proxy image" },
            { status: 500 },
        );
    }
}
