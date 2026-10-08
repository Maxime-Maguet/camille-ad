import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { siteDescription, siteName, siteTitle } from "../lib/seo";

const repoRoot = path.resolve(
  fileURLToPath(new URL(".", import.meta.url)),
  "..",
);

test("siteName is Camille", () => {
  assert.equal(siteName, "Camille");
});

test("siteTitle matches the freelance administrative positioning", () => {
  assert.equal(
    siteTitle,
    "Assistante administrative freelance — Secrétariat, RH, paie & pré-compta | Camille",
  );
});

test("siteDescription matches the Haute-Garonne / Tarn copy", () => {
  assert.equal(
    siteDescription,
    "Assistante administrative et virtuelle freelance pour TPE et PME en Haute-Garonne et dans le Tarn : secrétariat, RH, paie Silae, pré-comptabilité, facturation et relances. Appel découverte gratuit.",
  );
});

test("baseUrl falls back when NEXT_PUBLIC_SITE_URL is unset", () => {
  const env = { ...process.env };
  delete env.NEXT_PUBLIC_SITE_URL;

  const result = spawnSync(
    process.execPath,
    [
      "--eval",
      "import('./lib/seo.ts').then((m) => process.stdout.write(m.baseUrl))",
    ],
    { cwd: repoRoot, env, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, "https://camille-ad.vercel.app");
});
