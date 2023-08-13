
export function readingTime(article: string): number {
  return Math.ceil(article.split(' ').filter(function (w: string) {
    return w != ''
  }).length / 200);
}