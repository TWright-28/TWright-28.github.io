import fs from "fs";
import path from "path";

const photosDir = path.join(process.cwd(), "public", "photos");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

export interface Photo {
  filename: string;
  src: string;
  alt: string;
}

export function getAllPhotos(): Photo[] {
  if (!fs.existsSync(photosDir)) return [];
  return fs
    .readdirSync(photosDir)
    .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
    .map((filename) => ({
      filename,
      src: `/photos/${filename}`,
      alt: filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
    }));
}
