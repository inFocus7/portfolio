import { WorkData } from "./work";
import { ProjectData } from "./project";
import ThemeContext from "../context/theme-context";

export type ShowcaseWorkType = {
  info: WorkData[];
};

export type ShowcaseProjectsType = {
  info: ProjectData[];
};

export type NavType = {
  currIndex: number;
  sectionTitles: string[];
  setIndex: Function;
  theme: ThemeContext;
};

export type LinkBType = {
  data: {[key: string]: string | undefined};
  title: string;
};

export type StackDisplayType = {
  name: string;
  isStylized?: boolean;
};

export type StylizedStackType = {
  parent: string;
  stack: string[];
};
