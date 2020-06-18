export type WorkData = {
  company: string;
  date: {
    start: string;
    end?: string;
  };
  description: string;
  position: string;
  location: string;
  points: string[];
  stack: string[];
};
