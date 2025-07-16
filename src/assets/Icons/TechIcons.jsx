import Mongodb from "./Databases/Mongodb";
import PostgreSQL from "./Databases/Psql";
import MySQL from "./Databases/Sql";

import ReactIcon from "./libraries/React";
import CSS from "./Languages/Css";
import TailwindCSS from "./Languages/Tailwind";
import JavaScript from "./Languages/JavaScript";
import HTML5 from "./Languages/Html";
import Java from "./Languages/Java";
import Nodejs from "./libraries/Node";
// import TypeScript from "./Languages/Typescript";

import JWT from "./libraries/Jwt";
import Expressjs from "./libraries/Express";

import Git from "./Tools/Git";
import Github from "./Tools/Github";
import VisualStudioCode from "./Tools/Vscode";
import Notion from "./Tools/Notion";
import Vite from "./Tools/Vite";
import Postman from "./Tools/Postman";
import Vercel from "./Tools/Vercel";

export const techIcons = {
  Frontend: {
    Html: HTML5,
    Css: CSS,
    Tailwind: TailwindCSS,
    JavaScript: JavaScript,
    React: ReactIcon,
    // TypeScript: TypeScript,
   
  },
  Backend: {
    NodeJS: Nodejs,
    Expressjs: Expressjs,
    Jwt: JWT,
  },
  Database: {
    MongoDB: Mongodb,
    MySQL: MySQL,
    // PostgreSQL: PostgreSQL,
  },
  Programming: {
    // TypeScript: TypeScript,
    Java: Java,
    JavaScript: JavaScript,
  },
  Tools: {
   
    Git: Git,
    Github: Github,
    VSCode: VisualStudioCode,
    Notion: Notion,
    Vite: Vite,
    Postman: Postman,
    Vercel: Vercel,
  }
};
