export interface Article {
  title: string;
  url: string;
  date: Date;
  image?: string;
  lang: 'en' | 'th';
}

const FEED = 'https://medium.com/feed/@thiraphat-ps-dev';

const pick = (xml: string, tag: string) =>
  xml.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`))?.[1]?.trim();

/** Fetched at build time — the shipped page has no client-side requests. */
export async function getArticles(limit = 8): Promise<Article[]> {
  try {
    const res = await fetch(FEED);
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, limit).map(([, item]) => {
      const title = pick(item, 'title') ?? 'Untitled';
      const url = (pick(item, 'link') ?? '').split('?')[0];
      const image = item.match(/<img[^>]+src="([^"]+)"/)?.[1];
      return {
        title,
        url,
        date: new Date(pick(item, 'pubDate') ?? Date.now()),
        image,
        lang: /[฀-๿]/.test(title) ? 'th' : 'en',
      };
    });
  } catch {
    return [];
  }
}
