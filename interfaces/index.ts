import ThemeContext from "../context/theme-context"

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
  GitHub: [string, React.FunctionComponent<React.SVGAttributes<SVGElement>>];
  LinkedIn: [string, React.FunctionComponent<React.SVGAttributes<SVGElement>>];
  Email: [string, React.FunctionComponent<React.SVGAttributes<SVGElement>>];
  Twitter: [string, React.FunctionComponent<React.SVGAttributes<SVGElement>>];
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
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  background: string;
  foreground: string;
};

export interface Stylized {
  theme: ThemeContext;
};

export interface BadgeType extends Stylized {
  img: string;
}

export interface StylizedBadgeType extends BadgeType {
  background: string;
  foreground: string;
}