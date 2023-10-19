import { Article } from '@/types/api/medium-articles';

export function titleToSlug(title: string): string {
  let slug = title.toLowerCase().replace(/[\s\W]+/g, '-');

  slug = slug.substring(0, 50);

  if (slug.endsWith('-')) {
    slug = slug.slice(0, -1);
  }

  return slug;
}

export function findArticleBySlug(
  slug: string,
  articles: Article[],
): Article | undefined {
  const slugWords = slug.split('-').map((word) => word.toLowerCase());

  for (let article of articles) {
    const titleWords = article.title
      .toLowerCase()
      .replace(/[\.,;:]/g, '')
      .split(/\s+/);

    const matchingWords = slugWords.filter((word) =>
      titleWords.includes(word),
    ).length;

    // If more than half the words from the slug match the title, return the article
    if (matchingWords / slugWords.length > 0.5) {
      return { ...article, slug };
    }
  }

  return undefined;
}
