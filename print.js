const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const outputDir = path.join(__dirname, "output");
const outputPath = process.argv[2]
  ? path.resolve(__dirname, process.argv[2])
  : path.join(outputDir, "심규호_올거나이즈_LLM_PM_지원서.pdf");
const htmlPath = path.join(__dirname, "index.html");

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1600 },
    deviceScaleFactor: 1,
  });

  await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle",
  });

  const pageCount = await page.locator(".page").count();
  if (pageCount !== 5) {
    throw new Error(`Expected 5 .page elements, found ${pageCount}.`);
  }

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`PDF saved: ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
