import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiTypescript, SiAngular, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNpm, SiMongodb, SiMysql, SiGithub, SiSwift, SiSelenium, SiSharp, SiAndroid, SiKotlin } from "react-icons/si";
import { TbBrandSwift } from "react-icons/tb";
import { Card } from "./ui/card";

const skills = [
  // Frontend
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Angular", icon: SiAngular },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },

  // Mobile
  { name: "Android", icon: SiAndroid },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Jetpack Compose", icon: SiAndroid },
  { name: "Swift", icon: SiSwift },
  { name: "SwiftUI", icon: TbBrandSwift },

  // Backend
  { name: "NodeJS", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },

  // Databases
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: SiMysql },

  // Testing
  { name: "Playwright", icon: SiJavascript }, // Placeholder
  { name: "Selenium", icon: SiSelenium },

  // Tools
  { name: "npm", icon: SiNpm },
  { name: "GitHub", icon: SiGithub },

  // Other
  { name: "C#", icon: SiSharp },
];

export default function SkillsSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4" id="skills">
      <h2 className="text-2xl font-bold mb-8 text-center">What I Work With</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map(({ name, icon: Icon }) => (
          <Card key={name} className="flex flex-col items-center p-4">
            <Icon
              className={
                "w-12 h-12 mb-2 text-emerald-500" +
                (name === "Cursor" ? " rotate-[30deg]" : "")
              }
            />
            <span className="text-center text-sm font-medium mt-1">{name}</span>
          </Card>
        ))}
      </div>
    </section>
  );
} 