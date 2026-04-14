export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Vite glob — all .md files in src/posts/, loaded as raw strings at build time.
const modules = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  }
  return { meta, content: match[2] };
}

export const allPosts: PostMeta[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace(/^.*\//, "").replace(/\.md$/, "");
    const { meta } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      description: meta.description ?? "",
      category: meta.category ?? "misc",
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date)); // newest first

export function getPost(slug: string): Post | undefined {
  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${slug}.md`)
  );
  if (!entry) return undefined;
  const [, raw] = entry;
  const { meta, content } = parseFrontmatter(raw);
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    description: meta.description ?? "",
    category: meta.category ?? "misc",
    content,
  };
}
