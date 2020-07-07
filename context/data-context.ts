import React, { SetStateAction, Dispatch } from "react"
import { AboutData } from "../interfaces/about";
import { FunData } from "../interfaces/fun";
import { HeroData } from "../interfaces/hero";
import { WorkData } from "../interfaces/work";
import { ProjectData } from "../interfaces/project";

type DataContext = {
  about?: AboutData
  facts?: FunData
  main?: HeroData
  work?: WorkData
  projects?: ProjectData
}

// TODO: Set-up type && etc...
const DataContext = React.createContext({
  data: {},
  setData: null
});

type LoadingContext = {
    loading: boolean,
    toggleLoading: Dispatch<SetStateAction<boolean>> | undefined
}

const LoadingContext = React.createContext({
    loading: true,
    toggleLoading: null
});

export {DataContext, LoadingContext};