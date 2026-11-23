/**
 * ponytail: one-line dynamic Cloudinary format + quality + resize optimization
 * Delivers lightweight WebP/AVIF compressed assets instead of raw multi-MB originals.
 */
export function getOptimizedImageUrl(url?: string | null, width = 600): string {
  if (!url) return "";
  if (!url.includes("res.cloudinary.com") || url.includes("/upload/f_auto")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
}
