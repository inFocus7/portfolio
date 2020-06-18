export type SectionHeaderType = {
  num: number;
  title: string;
};

export type emojiMatcherType = {
  music: string;
  movies: string;
  tv: string;
  games: string;
};

export type companyToImageType = {
  GitHub: [string, Function];
  LinkedIn: [string, Function];
  Email: [string, Function];
  Twitter: [string, Function];
};

export type stackToImageType = {
  React: objectImgType;
  "C++": objectImgType;
  JavaScript: objectImgType;
  "Node.js": objectImgType;
  Figma: objectImgType;
  GraphQL: objectImgType;
  PostgreSQL: objectImgType;
  MongoDB: objectImgType;
  TypeScript: objectImgType;
  Redux: objectImgType;
  PHP: objectImgType;
  "Transact-SQL": objectImgType;
  Flutter: objectImgType;
  Heroku: objectImgType;
  Gatsby: objectImgType;
  Bootstrap: objectImgType;
  Netlify: objectImgType;
  GitHub: objectImgType;
  Notion: objectImgType;
  Website: objectImgType;
};

export type objectImgType = {
  url: string;
  icon: Function;
  background: string;
  foreground: string;
};
