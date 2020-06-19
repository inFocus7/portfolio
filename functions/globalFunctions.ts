import React from "react";
import { throttle } from "lodash";
import ghUrl, {
  ReactComponent as GitHub,
} from "../public/images/outIcos/icons8-github.svg";
import liUrl, {
  ReactComponent as LinkedIn,
} from "../public/images/outIcos/icons8-linkedin.svg";
import eUrl, {
  ReactComponent as Email,
} from "../public/images/outIcos/icons8-email.svg";
import tUrl, {
  ReactComponent as Twitter,
} from "../public/images/outIcos/icons8-twitter.svg";
import rUrl, {
  ReactComponent as ReactIcon,
} from "../public/images/outIcos/react-2.svg";
import cUrl, { ReactComponent as Cpp } from "../public/images/outIcos/cpp.svg";
import jsUrl, {
  ReactComponent as JavaScript,
} from "../public/images/outIcos/javascript.svg";
import njUrl, {
  ReactComponent as Nodejs,
} from "../public/images/outIcos/nodejs-icon.svg";
import fUrl, {
  ReactComponent as Figma,
} from "../public/images/outIcos/figma-1.svg";
import gqlUrl, {
  ReactComponent as GraphQL,
} from "../public/images/outIcos/graphql.svg";
import psqlUrl, {
  ReactComponent as PostgreSQL,
} from "../public/images/outIcos/postgresql.svg";
import mdbUrl, {
  ReactComponent as MongoDB,
} from "../public/images/outIcos/mongodb.svg";
import tsUrl, {
  ReactComponent as TypeScript,
} from "../public/images/outIcos/typescript.svg";
import rdUrl, {
  ReactComponent as Redux,
} from "../public/images/outIcos/redux.svg";
import pUrl, { ReactComponent as PHP } from "../public/images/outIcos/php-1.svg";
import ftUrl, {
  ReactComponent as Flutter,
} from "../public/images/outIcos/flutter-logo.svg";
import hUrl, {
  ReactComponent as Heroku,
} from "../public/images/outIcos/heroku-1.svg";
import msSQL, {
  ReactComponent as MsSQL,
} from "../public/images/outIcos/microsoft-sql-server.svg";
import iUrl, { ReactComponent as Icon } from "../public/images/Icon-sm.svg";
import gUrl, {
  ReactComponent as Gatsby,
} from "../public/images/outIcos/gatsby.svg";
import nUrl, {
  ReactComponent as Netlify,
} from "../public/images/outIcos/netlify.svg";
import bUrl, {
  ReactComponent as Bootstrap,
} from "../public/images/outIcos/bootstrap-4.svg";
import ntUrl, {
  ReactComponent as Notion,
} from "../public/images/outIcos/notion-2.svg";
import wUrl, {
  ReactComponent as Website,
} from "../public/images/outIcos/icons8-website-35px.svg";
import { objectImgType } from "../interfaces/index";
// import {stackToImageType, companyToImageType, emojiMatcherType, objectImgType} from "../interfaces/index"

export const companyToImage: {[key: string]: [string, React.FunctionComponent<React.SVGAttributes<SVGElement>>] | undefined} = {
  GitHub: [ghUrl, GitHub],
  LinkedIn: [liUrl, LinkedIn],
  Email: [eUrl, Email],
  Twitter: [tUrl, Twitter],
};

/**
 * Reformats data into the object I'm using.
 *
 * @param {string} url
 * @param {React.FunctionComponent<React.SVGAttributes<SVGElement>>} icon (React Component svg for icon)
 * @param {string} background
 * @param {string} foreground
 * @returns
 */
const objectImg = (url: string, icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>, background: string, foreground: string) => {
  return {
    url: url,
    icon: icon,
    background: background,
    foreground: foreground,
  };
};

export const stackToImage: {[key: string]: objectImgType | undefined} = {
  React: objectImg(rUrl, ReactIcon, "#61DBFB", "#020302"),
  "C++": objectImg(cUrl, Cpp, "#00599B", "#FFFFFF"),
  JavaScript: objectImg(jsUrl, JavaScript, "#F0DB4F", "#323330"),
  "Node.js": objectImg(njUrl, Nodejs, "#68A063", "#303030"),
  Figma: objectImg(fUrl, Figma, "#F24E24", "#FFFFFF"),
  GraphQL: objectImg(gqlUrl, GraphQL, "#E535AA", "#FFFFFF"),
  PostgreSQL: objectImg(psqlUrl, PostgreSQL, "#336691", "#FFFFFF"),
  MongoDB: objectImg(mdbUrl, MongoDB, "#4DB33D", "#3F3E42"),
  TypeScript: objectImg(tsUrl, TypeScript, "#0177C6", "#F8F8F8"),
  Redux: objectImg(rdUrl, Redux, "#7248B7", "#F8F8F8"),
  PHP: objectImg(pUrl, PHP, "#787CB5", "#000000"),
  "Transact-SQL": objectImg(msSQL, MsSQL, "#E13828", "#FFFEFF"),
  Flutter: objectImg(ftUrl, Flutter, "#59C2F0", "#F8F8F8"),
  Heroku: objectImg(hUrl, Heroku, "#5B18AB", "#F8F8F8"),
  Gatsby: objectImg(gUrl, Gatsby, "#734C9E", "#FFFFFF"),
  Bootstrap: objectImg(bUrl, Bootstrap, "#563C7B", "#FFFFFF"),
  Netlify: objectImg(nUrl, Netlify, "#25C7B7", "#FFFFFF"),
  GitHub: objectImg(ghUrl, GitHub, "#F7F7F7", "#000000"),
  Notion: objectImg(ntUrl, Notion, "#000000", "#FFFFFF"),
  Website: objectImg(wUrl, Website, "", ""),
};

export const emojiMatcher: {[key: string]: string | undefined} = {
  music: "🎵",
  movies: "🎥",
  tv: "📺",
  games: "🎮",
};

export const AppIcon = { url: iUrl, icon: Icon };

export function useDocumentScrollThrottled(callback: Function) {
  const [, setScrollPosition] = React.useState(0);
  let prevScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((prevPos) => {
      prevScrollTop = prevPos;
      return currScrollTop;
    });

    callback({ prevScrollTop, currScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  React.useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);
}
