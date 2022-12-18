export type PostInfo = {
  slug: string;
  title: string;
  author: string;
  category: string;
  date: string;
  bannerImage: string;
  tags: Array<string>;
  frontmatter: PostDetail;
};

export type PostDetail = {
  title: string;
  author: string;
  category: string;
  date: string;
  bannerImage: string;
  tags: Array<string>;
  readTime: string;
};
