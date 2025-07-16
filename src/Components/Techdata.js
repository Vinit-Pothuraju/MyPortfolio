import { techIcons } from "../assets/Icons/TechIcons";

const defaultLevels = {
  React: "Intermediate",
  Tailwind: "Intermediate",
  Css: "Intermediate",
  Html: "Expert",
  TypeScript: "Intermediate",
  JavaScript: "Expert",
  NodeJS: "Intermediate",
  Jwt: "Beginner",
  Expressjs: "Intermediate",
  MongoDB: "Intermediate",
  SQL: "Intermediate",
  PostgreSQL: "Beginner",
  Java: "Intermediate",
  Figma: "Intermediate",
  Git: "Intermediate",
  Github: "Intermediate",
  VSCode: "Expert",
  Notion: "Beginner",
  Vite: "Intermediate",
  Postman: "Intermediate",
  Vercel: "Intermediate",
};

// Flatten and deduplicate techIcons based on name
const techMap = new Map();

for (const [category, items] of Object.entries(techIcons)) {
  for (const [name, icon] of Object.entries(items)) {
    if (!techMap.has(name)) {
      techMap.set(name, {
        name,
        icon,
        category,
        level: defaultLevels[name] || "Beginner",
      });
    }
  }
}

// Convert Map to array
export const techData = Array.from(techMap.values());

// Create unique categories
export const categories = ["All", ...new Set(Object.keys(techIcons))];
