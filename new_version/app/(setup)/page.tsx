import { delay } from "@/app/utils/misc";
import { redirect } from "next/navigation";

export default async function Home() {
  await delay(2000);
  redirect("/about");
  return <div>Home Page</div>;
}
