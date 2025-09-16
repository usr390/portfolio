'use client'
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiTypescript,
  SiAngular, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGithub, SiSwift, SiSelenium, SiAndroid, SiKotlin, SiAppium, SiPostman,
  SiSwagger, SiPercy, 
  SiPython} from "react-icons/si";
import { TbBrandSwift } from "react-icons/tb";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MdAccessibility } from "react-icons/md"; // Material Design icon



const skills = [
  // Testing
  {
    name: "Playwright",
    icon: SiJavascript, // placeholder icon
    description: "Headless browser automation for fast, reliable UI tests.",
    url: "https://playwright.dev",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    description: "Open-source framework for browser automation across all major browsers.",
    url: "https://www.selenium.dev",
  },
  {
    name: "Appium",
    icon: SiAppium,
    description: "Cross-platform mobile UI automation for iOS & Android.",
    url: "https://appium.io",
  },
  {
    name: "Percy",
    icon: SiPercy,
    description: "Visual regression testing as a service (screenshots & diffing).",
    url: "https://percy.io",
  },
  {
    name: "Postman",
    icon: SiPostman,
    description: "API design, testing, docs, and monitoring platform.",
    url: "https://www.postman.com",
  },
  {
    name: "Swagger",
    icon: SiSwagger,
    description: "OpenAPI tooling for API design, docs, and mocks.",
    url: "https://swagger.io",
  },
  {
    name: "NVDA (& similar)",
    icon: MdAccessibility,
    description: "Free, open-source screen reader for Windows used in accessibility testing.",
    url: "https://www.nvaccess.org",
  },
  // Tools
  {
    name: "GitHub",
    icon: SiGithub,
    description: "Source control hosting, PRs, and social coding.",
    url: "https://github.com",
  },
  {
    name: "GitHub Actions",
    icon: SiGithub,
    description: "CI/CD workflows natively inside GitHub.",
    url: "https://github.com/features/actions",
  },
  // Frontend
  { name: "Angular", icon: SiAngular, description: "Component-based SPA framework.", url: "https://angular.io" },
  { name: "React", icon: SiReact, description: "Declarative UI library for web & native.", url: "https://react.dev" },
  { name: "Next.js", icon: SiNextdotjs, description: "React meta-framework: SSR, SSG, API routes.", url: "https://nextjs.org" },
  { name: "JavaScript", icon: SiJavascript, description: "Language of the web.", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, description: "Typed superset of JS for large codebases.", url: "https://www.typescriptlang.org" },
  { name: "Tailwind", icon: SiTailwindcss, description: "Utility-first CSS framework.", url: "https://tailwindcss.com" },
  { name: "Bootstrap", icon: SiBootstrap, description: "CSS components & grid system.", url: "https://getbootstrap.com" },
  { name: "HTML", icon: SiHtml5, description: "Markup standard for web documents.", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, description: "Stylesheet language for web presentation.", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  // Mobile
  { name: "Kotlin", icon: SiKotlin, description: "Modern JVM language powering Android.", url: "https://kotlinlang.org" },
  { name: "Jetpack Compose", icon: SiAndroid, description: "Declarative UI toolkit for Android.", url: "https://developer.android.com/jetpack/compose" },
  { name: "Swift", icon: SiSwift, description: "Apple’s language for iOS & macOS apps.", url: "https://developer.apple.com/swift" },
  { name: "SwiftUI", icon: TbBrandSwift, description: "Declarative UI framework for Apple platforms.", url: "https://developer.apple.com/swiftui/" },
  // Backend
  { name: "NodeJS", icon: SiNodedotjs, description: "Event-driven runtime for JS on the server.", url: "https://nodejs.org" },
  { name: "Express", icon: SiExpress, description: "Minimalist HTTP server for Node.", url: "https://expressjs.com" },
  { name: "Python", icon: SiPython, description: "General programming language.", url: "https://www.python.org/downloads/" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, description: "Document database for fast iteration.", url: "https://www.mongodb.com" },
  { name: "SQL", icon: SiMysql, description: "Structured query language for relational DBs.", url: "https://www.mysql.com" },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isTooltipActive, setIsTooltipActive] = useState<string | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;;
    if (hoveredSkill) {
      setIsTooltipActive(hoveredSkill);
    } else {
      timeout = setTimeout(() => setIsTooltipActive(null), 200); // 200ms delay before hiding tooltip
    }
    return () => clearTimeout(timeout); // Cleanup timeout on unmount or state change
  }, [hoveredSkill]);

  return (
    <section id="skills" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">What I Work With</h2>
      <p className="mb-6 text-center text-gray-700">
          I generally consider myself to be tool agnostic and always open to trying new technologies, however these days I find myself working with:
      </p>


      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Card className="flex flex-col items-center p-4 transition-transform duration-200 hover:scale-105">
              <skill.icon className="w-12 h-12 mb-2 text-emerald-500" />
              <span className="text-center text-sm font-medium">{skill.name}</span>
            </Card>

            <AnimatePresence>
              {isTooltipActive === skill.name && (
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-gray-900 text-white text-xs rounded-lg p-4 shadow-lg z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)} // Keep tooltip active when hovered
                  onMouseLeave={() => setHoveredSkill(null)} // Allow tooltip to hide when leaving
                >
                  <p className="mb-2 leading-snug">{skill.description}</p>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-emerald-400 hover:text-emerald-300"
                  >
                    Learn more
                  </a>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}