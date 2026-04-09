const decorImages = [
  "/decor-real-1.jpg",
  "/decor-real-2.jpg",
  "/decor-real-3.jpg",
  "/decor-real-4.jpg",
  "/decor-real-5.jpg",
  "/decor-real-6.jpg",
] as const;

export function getDecorImageByKey(key: string) {
  if (!key) return decorImages[0];

  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }

  const index = Math.abs(hash) % decorImages.length;
  return decorImages[index];
}

export function getDecorImagePool() {
  return [...decorImages];
}
