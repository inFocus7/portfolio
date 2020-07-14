import React, { SetStateAction, Dispatch } from "react";
import { AboutData } from "../interfaces/about";
import { FunData } from "../interfaces/fun";
import { HeroData } from "../interfaces/hero";
import { WorkData } from "../interfaces/work";
import { ProjectData } from "../interfaces/project";

type DataContext = {
  data: {
    about?: AboutData;
    facts?: FunData[];
    main?: HeroData;
    work?: WorkData[];
    projects?: ProjectData[];
  };
  setData:
    Dispatch<
        SetStateAction<{
          about?: AboutData;
          fun?: FunData[];
          main?: HeroData;
          work?: WorkData[];
          projects?: ProjectData[];
        }>
      >
    | undefined;
};

// TODO: Set-up type && etc...
const DataContext = React.createContext<Partial<DataContext>>({
  data: {},
  setData: undefined,
});

type LoadingContext = {
  loading: boolean;
  toggleLoading: Dispatch<SetStateAction<boolean>> | undefined;
};

const LoadingContext = React.createContext<Partial<LoadingContext>>({
  loading: true,
  toggleLoading: undefined,
});

export { DataContext, LoadingContext };
