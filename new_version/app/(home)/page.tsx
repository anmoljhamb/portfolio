import { delay } from "@/app/utils/misc";

export default async function Home() {
  await delay(2000);
  return <div>Home Page</div>;
}
