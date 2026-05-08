import { test, expect, type ConsoleMessage } from "@playwright/test";

// Routes in dehaas-demo: /, /creations, /inspiration
const routes = ["/", "/creations", "/inspiration"] as const;

for (const route of routes) {
  test(`route ${route} loads with no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg: ConsoleMessage) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    expect(errors, `unexpected console errors on ${route}:\n${errors.join("\n")}`).toEqual([]);
  });
}
