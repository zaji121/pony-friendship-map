"""Generate lossless WebP previews for the 80–88 CSS px roster portraits."""

import json
from pathlib import Path
import subprocess
from urllib.parse import urlsplit

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCES = """
const fs = require('node:fs');
const vm = require('node:vm');
const window = {PREFERENCE_PROFILES:{}};
const ctx = vm.createContext({window});
for (const file of ['characters','expanded-art','new-fullbody-art']) {
  vm.runInContext(fs.readFileSync('public/' + file + '.js','utf8'),ctx);
}
const roles = window.CHARACTER_SLUGS.filter(slug => !window.INACTIVE_CHARACTERS.includes(slug));
console.log(JSON.stringify(Object.fromEntries(roles.map(slug => [
  slug, window.EXPANDED_ART[slug]?.file || '/images/ponies/' + slug + '.webp'
]))));
"""


def main():
    sources = json.loads(subprocess.check_output(["node", "--eval", SOURCES], cwd=ROOT))
    output = PUBLIC / "images" / "roster-thumbs"
    output.mkdir(parents=True, exist_ok=True)
    original_bytes = preview_bytes = 0
    for slug, url in sources.items():
        source = PUBLIC / urlsplit(url).path.lstrip("/")
        target = output / f"{slug}.webp"
        with Image.open(source) as original:
            image = original.convert("RGBA")
            image.thumbnail((320, 320), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", lossless=True, method=6)
        original_bytes += source.stat().st_size
        preview_bytes += target.stat().st_size
    print(f"{len(sources)} previews: {original_bytes:,} -> {preview_bytes:,} bytes")


if __name__ == "__main__":
    main()
