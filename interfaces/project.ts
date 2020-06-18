export type ProjectData = {
  name: string;
  date: {
    start: Date;
    end?: Date;
  };
  description: string;
  progress: string;
  isMajor: boolean;
  place?: number;
  role: string[];
  stack: string[];
  content: string[];
  links: {
    github?: {
      frontend?: string;
      backend?: string;
    };
    figma?: {
      mobile?: string;
      web?: string;
      desktop?: string;
    };
    notion?: {
      workboard?: string;
    };
    website?: {
      link?: string;
    };
  };
};
