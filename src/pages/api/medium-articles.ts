import { NextApiRequest, NextApiResponse } from 'next';
import { Article } from '@/types/api/medium-articles';

const fetchMediumArticles = async (_: NextApiRequest, res: NextApiResponse) => {
  const rssUrl = process.env.MEDIUM_RSS_URL;

  if (!rssUrl) {
    res.status(500).json({ error: 'RSS URL not configured' });
    return;
  }

  try {
    const response = await fetch(rssUrl);
    if (!response.ok) {
      throw new Error('Medium RSS fetch failed');
    }

    const data = await response.json();
    const items: Article[] = data.items;

    res.status(200).json(items.slice(0, 3));
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch Medium posts' });
  }
};

export default fetchMediumArticles;
