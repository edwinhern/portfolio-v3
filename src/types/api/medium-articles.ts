export interface Article {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
  slug?: string;
}

export interface MediumProps {
  article: Article | null;
}
