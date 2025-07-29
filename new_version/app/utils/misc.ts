export async function delay(ms: number) {
  "use server";
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), ms);
  });
}
