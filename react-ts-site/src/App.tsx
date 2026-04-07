import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import hclTechLogo from "./assets/HCLTech-logo.svg";
import microsoftLogo from "./assets/msft-logo.svg";
import tapLogo from "./assets/tap-logo.png";

type TimelineItem = {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  logoUrl?: string;
  description: string | string[];
  tags: string[];
};

type Project = {
  title: string;
  href?: string;
  description: string;
  tags: string[];
  highlightDescription?: boolean;
};

type Course = {
  title: string;
  progress: number;
  status: string;
  description: string;
  tags: string[];
  leetcodeStats?: {
    solvedCount: number;
    totalCount: number;
    solved: {
      label: string;
      shortLabel: string;
      count: number;
      total: number;
      colorClassName: string;
    }[];
  };
};

const timeline: TimelineItem[] = [
  {
    period: "MAR - OCT 2025",
    title: "Senior Technical Lead · HCLTech",
    company: "HCLTech",
    companyUrl: "https://www.hcltech.com/",
    logoUrl: hclTechLogo,
    description: [
      "- Led the rollout of a global contact-center platform supporting large-scale enterprise operations across multiple regions.",
      "- Designed and implemented automation workflows to improve routing, case handling, and agent experiences.",
      "- Partnered with stakeholders to translate complex business needs into structured technical solutions.",
      "- Focused on reliability, scalability, and smooth deployment across distributed teams.",
    ],
    tags: [
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Business Rules",
      "Python",
      "REST APIs",
      "SQL",
      "Azure",
      "Dynamics 365 CCaaS",
      "Copilot Studio",
    ],
  },
  {
    period: "2020 - 2025",
    title: "Software Engineer · Microsoft",
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com/en-us",
    logoUrl: microsoftLogo,
    description: [
      "- Built and scaled customer-facing chat experiences used across a wide range of enterprise environments.",
      "- Developed internal tools to streamline workflows and improve efficiency in large-scale deployments.",
      "- Collaborated across engineering and AI teams to deliver seamless end-to-end communication experiences.",
      "- Contributed to onboarding and mentorship efforts to help engineers ramp quickly in complex systems.",
    ],
    tags: ["JavaScript", "HTML/CSS", "Node.js", "Business Rules", "Python", "REST APIs", "SQL", "Azure"],
  },
  {
    period: "2018 - 2020",
    title: "Software Developer · TAP Series LLC",
    company: "TAP Series LLC",
    companyUrl: "https://tapseries.io/",
    logoUrl: tapLogo,
    description: [
      "- Developed full-stack web applications focused on interactive learning and user engagement.",
      "- Built data processing pipelines to transform and standardize large datasets for internal systems.",
      "- Created dynamic UI experiences to enhance usability and interactivity across platforms.",
      "- Improved internal tools and reporting systems to support business operations and scalability.",
    ],
    tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Python", "Angular", "AWS", "Bootstrap", "Draggable.js", "pandas"],
  },
];

const projects: Project[] = [
  {
    title: "Playlist-dl",
    href: "https://github.com/kurtluu/playlist-dl",
    description:
      "Web app for searching songs and converting them into downloadable audio. View and download individual tracks, process Spotify or Soundcloud playlists into matched songs, and export as ZIP files of MP3s with metadata tagging.",
    tags: ["React", "Next.js", "Node.js", "Spotify API", "Soundcloud API"],
  },
  {
    title: "OpenClaw Agent",
    description:
      "AI agent project focused on tool use, multi-step task execution, and practical workflow automation for real-world developer tasks.",
    tags: ["AI", "Agents", "Automation", "TypeScript", "Node.js"],
    highlightDescription: false,
  },
  {
    title: "Personal Portfolio",
    href: "https://github.com/kurtluu/portfolio",
    description:
      "My personal portfolio site featuring responsive sections, theme switching, and custom UI styling focused on clean UX and performance.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS", "Vercel"],
  },
];

const courses: Course[] = [
  {
    title: "React - The Complete Guide (incl. Next.js, Redux) by Maximilian Schwarzmüller",
    progress: 11.9,
    status: "11.9% complete",
    description: "Deepening my React fundamentals around component patterns, state flow, and building polished UI experiences.",
    tags: ["React", "Next.js", "Redux"],
  },
  {
    title: "TypeScript by Maximilian Schwarzmüller",
    progress: 11.5,
    status: "11.5% complete",
    description: "Sharpening type-safe application design with stronger typing, reusable interfaces, and practical developer tooling.",
    tags: ["TypeScript"],
  },
  {
    title: "System Design via Hellointerview",
    progress: 44.5,
    status: "44.5% complete",
    description: "Working through scalable architecture concepts including reliability, throughput, data flow, and tradeoff analysis.",
    tags: ["Scalability", "Architecture", "Reliability"],
  },
  {
    title: "LeetCode",
    progress: 68,
    status: "68% complete",
    description: "Staying consistent with algorithm practice to improve problem solving, speed, and confidence in technical interviews.",
    tags: ["Python", "JavaScript"],
    leetcodeStats: {
      solvedCount: 65,
      totalCount: 3874,
      solved: [
        { label: "Hard", shortLabel: "Hard", count: 0, total: 915, colorClassName: "leetcode-hard" },
        { label: "Medium", shortLabel: "Med.", count: 33, total: 2027, colorClassName: "leetcode-medium" },
        { label: "Easy", shortLabel: "Easy", count: 32, total: 932, colorClassName: "leetcode-easy" },
      ],
    },
  },
  {
    title: "NeetCode",
    progress: 22.7,
    status: "22.7% complete",
    description: "Neetcode150",
    tags: ["Python", "JavaScript"],
    leetcodeStats: {
      solvedCount: 41,
      totalCount: 150,
      solved: [
        { label: "Hard", shortLabel: "Hard", count: 0, total: 21, colorClassName: "leetcode-hard" },
        { label: "Medium", shortLabel: "Med.", count: 25, total: 101, colorClassName: "leetcode-medium" },
        { label: "Easy", shortLabel: "Easy", count: 16, total: 28, colorClassName: "leetcode-easy" },
      ],
    },
  },
];

const socialLinks = [
  { href: "https://github.com/kurtluu", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kurtluu/", label: "LinkedIn" },
  { href: "mailto:kurtluu12@gmail.com", label: "Email" },
];

const aboutHighlightTerms = [
  "frontend-leaning",
  "software engineer",
  "building systems and interfaces",
  "scalable",
  "accessible",
  "thoughtfully designed",
  "leading global deployments",
  "Fortune 500 enterprise clients",
  "collaborating with cross-functional teams",
  "automation tools",
  "distributed systems",
  "production environments",  
  "AI",
  "LLM technologies",
  "build modern applications",
  "prompt engineering",
  "applied AI workflows",
  "ship reliable software at scale",
];

const getSocialLinkClassName = (label: string) => `social-link-${label.toLowerCase()}`;

type Theme = "dark" | "light";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const toCaseInsensitivePattern = (value: string) =>
  escapeRegExp(value).replace(/[a-zA-Z]/g, (char) => `[${char.toLowerCase()}${char.toUpperCase()}]`);
const numericHighlightPattern = "\\b\\d{1,3}(?:,\\d{3})*(?:\\.\\d+)?%|\\b\\d+(?:\\.\\d+)?[KMB]\\b|\\b\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?\\b|\\b\\d+(?:\\.\\d+)?\\b";

function renderHighlightedText(text: string, keywords: string[]) {
  const uniqueKeywords = Array.from(new Set(keywords.filter(Boolean))).sort((a, b) => b.length - a.length);
  const caseSensitiveKeywords = ["AI", "CLI", "LLM"];
  const exactCaseKeywords = uniqueKeywords.filter((keyword) => caseSensitiveKeywords.includes(keyword));
  const caseInsensitiveKeywords = uniqueKeywords.filter((keyword) => !caseSensitiveKeywords.includes(keyword));

  if (!uniqueKeywords.length) {
    return text;
  }

  const patternParts = [
    ...exactCaseKeywords.map(escapeRegExp),
    ...caseInsensitiveKeywords.map(toCaseInsensitivePattern),
    numericHighlightPattern,
  ];
  const matcher = new RegExp(`(${patternParts.join("|")})`, "g");
  const parts = text.split(matcher);

  return parts.map((part, index) => {
    const isExactCaseMatch = exactCaseKeywords.includes(part);
    const isCaseInsensitiveMatch = caseInsensitiveKeywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());
    const isNumericMatch = new RegExp(`^${numericHighlightPattern}$`).test(part);
    const isMatch = isExactCaseMatch || isCaseInsensitiveMatch || isNumericMatch;
    return isMatch ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleCardPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleCardPointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.removeProperty("--spotlight-x");
    event.currentTarget.style.removeProperty("--spotlight-y");
  };

  const renderCourseMeter = (course: Course) => {
    if (!course.leetcodeStats) {
      return (
        <div className="course-progress" aria-label={`${course.title} progress`}>
          <div className="course-progress-track">
            <span className="course-progress-fill" style={{ width: `${course.progress}%` }} />
          </div>
        </div>
      );
    }

    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const gapLength = 8;
    const totalAvailable = course.leetcodeStats.solved.reduce((sum, item) => sum + item.total, 0);
    const usableLength = circumference - gapLength * course.leetcodeStats.solved.length;

    let offset = 0;
    const ringSegments = course.leetcodeStats.solved.map((item) => {
      const backgroundLength = usableLength * (item.total / totalAvailable);
      const solvedLength = backgroundLength * (item.count / item.total);
      const segment = {
        ...item,
        backgroundLength,
        solvedLength,
        dashOffset: -offset,
      };

      offset += backgroundLength + gapLength;
      return segment;
    });

    const breakdownOrder = ["Easy", "Med.", "Hard"];
    const breakdownItems = [...course.leetcodeStats.solved].sort(
      (a, b) => breakdownOrder.indexOf(a.shortLabel) - breakdownOrder.indexOf(b.shortLabel)
    );

    return (
      <div className="leetcode-meter" aria-label={`${course.title} progress by difficulty`}>
        <div className="leetcode-meter-ring">
          <div className="leetcode-meter-ring-shell">
            <svg viewBox="-4 -4 128 128" className="leetcode-meter-svg" aria-hidden="true">
              {ringSegments.map((item) => (
                <circle
                  key={`${item.label}-bg`}
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="5"
                  className={`leetcode-ring-track ${item.colorClassName}`}
                  strokeDasharray={`${item.backgroundLength} ${circumference}`}
                  strokeDashoffset={item.dashOffset}
                />
              ))}
              {ringSegments.map((item) => (
                <circle
                  key={`${item.label}-fg`}
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  strokeWidth="5"
                  className={`leetcode-ring-progress ${item.colorClassName}`}
                  strokeDasharray={`${item.solvedLength} ${circumference}`}
                  strokeDashoffset={item.dashOffset}
                />
              ))}
            </svg>
          </div>
          <div className="leetcode-meter-center">
            <strong>
              {course.leetcodeStats.solvedCount}
              <small>/{course.leetcodeStats.totalCount}</small>
            </strong>
            <span className="leetcode-meter-status">Solved</span>
          </div>
        </div>
        <div className="leetcode-breakdown">
          {breakdownItems.map((item) => (
            <div key={item.label} className={`leetcode-breakdown-item ${item.colorClassName}`}>
              <span>{item.shortLabel}</span>
              <strong>
                {item.count}/{item.total}
              </strong>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="background-glow" aria-hidden="true" />
      <div className="layout container">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        >
          <span className="theme-toggle-surface" aria-hidden="true" />
          <span className="theme-icon" aria-hidden="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`theme-icon-svg ${theme === "dark" ? "theme-icon-svg-hidden-moon" : ""}`.trim()}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`theme-icon-svg theme-icon-svg-sun ${theme === "dark" ? "" : "theme-icon-svg-hidden-sun"}`.trim()}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
              <path d="M6.343 17.657l-1.414 1.414" />
              <path d="M6.343 6.343l-1.414 -1.414" />
              <path d="M17.657 6.343l1.414 -1.414" />
              <path d="M17.657 17.657l1.414 1.414" />
              <path d="M4 12h-2" />
              <path d="M12 4v-2" />
              <path d="M20 12h2" />
              <path d="M12 20v2" />
            </svg>
          </span>
        </button>

        <aside className="sidebar">
          <div className="sidebar-inner">
            <div>
              <h1 className="name text-4xl font-bold tracking-tight sm:text-5xl">Kurt Luu</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
              <p className="subtitle">
                Experienced in building scalable web applications and production-ready systems.
              </p>
            </div>

            <div className="socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className={`social-link ${getSocialLinkClassName(link.label)}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <span className="social-icon" aria-hidden="true">
                    <SocialIcon label={link.label} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        <main className="content">
          <section id="about" className="content-section about-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">About</h2>
            </div>
            <article
              className="about-card"
              onPointerMove={handleCardPointerMove}
              onPointerLeave={handleCardPointerLeave}
            >
              <p>
                {renderHighlightedText(
                  "Hi, I'm Kurt! I'm a frontend-leaning software engineer driven by the idea that great software is both technically sound and aethetically crafted. I'm especially interested in building systems and interfaces that are scalable, accessible, and thoughtfully designed.",
                  aboutHighlightTerms
                )}
              </p>
              <p>
                {renderHighlightedText(
                  "My experience includes leading global deployments for Fortune 500 enterprise clients, developing internal automation tools to improve operational efficiency, and collaborating with cross-functional teams in order to ship reliable software at scale. Working across distributed systems and real-world production environments has shaped how I approach architecture, performance, and maintainability.",
                  aboutHighlightTerms
                )}
              </p>
              <p>
                {renderHighlightedText(
                  "Today, I'm focused on exploring AI and LLM technologies - including prompt engineering and applied AI workflows - while continuing to build modern applications.",
                  aboutHighlightTerms
                )}
              </p>
              <p>
                When I'm not coding, you'll likely catch me on the mats training Brazilian jiu-jitsu or working out at Luu's Lair <br></br>(my garage gym). I also enjoy playing tennis,
                snowboarding, mixing music and gooping in Speranza.
              </p>
            </article>
          </section>

          <section id="experience" className="content-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">Experience</h2>
            </div>
            {timeline.map((item) => (
              <a
                key={item.title}
                className="timeline-item"
                href={item.companyUrl}
                target="_blank"
                rel="noreferrer"
                onPointerMove={handleCardPointerMove}
                onPointerLeave={handleCardPointerLeave}
                aria-label={`${item.title} at ${item.company}`}
              >
                <div className="timeline-logo-wrap" aria-hidden="true">
                  {item.logoUrl ? (
                    <img className="timeline-logo" src={item.logoUrl} alt="" loading="lazy" />
                  ) : (
                    <span className="timeline-logo-fallback">
                      {item.company
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="item-body">
                  <div className="item-header">
                    <h3>{item.title}</h3>
                    <p className="period">{item.period}</p>
                  </div>
                  {Array.isArray(item.description) ? (
                    <ul className="description-list">
                      {item.description.map((point) => (
                        <li key={point}>{point.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                  <ul className="tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </section>

          <section id="projects" className="content-section projects-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">Projects</h2>
            </div>
            {projects.map((project) => (
              <a
                key={project.title}
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onPointerMove={handleCardPointerMove}
                onPointerLeave={handleCardPointerLeave}
                aria-label={`${project.title} project repository`}
              >
                <h3>{project.title}</h3>
                <p>{project.highlightDescription === false ? project.description : renderHighlightedText(project.description, project.tags)}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </a>
            ))}
          </section>

          <section id="courses" className="content-section courses-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">Courses</h2>
            </div>
            <p className="courses-note">
              I know my progress here is not especially impressive yet; but, I wanted to be transparent and use this section as an accountability/motivation system -- with the audience effect that my site creates for me. I purchased these courses in order to strengthen my fundamentals and I plan to keep moving the progress bar on them daily -- while continuing to build projects.
            </p>
            <div className="courses-grid">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="course-card"
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={handleCardPointerLeave}
                >
                  <div className="course-card-header">
                    <h3>{course.title}</h3>
                    {!course.leetcodeStats ? <span className="course-progress-value">{course.status}</span> : null}
                  </div>
                  <p>{course.description}</p>
                  {renderCourseMeter(course)}
                  <ul className="tags">
                    {course.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <footer className="footer">
            <p>Built with React and Tailwind CSS. Design inspired by Peter Steinberger, Yangshun Tay, and Brittany Chiang.</p>
            <div className="footer-icons" aria-label="Footer social links">
              {socialLinks.map((link) => (
                <a
                  key={`footer-${link.label}`}
                  className={`footer-icon-link ${getSocialLinkClassName(link.label)}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <span className="social-icon" aria-hidden="true">
                    <SocialIcon label={link.label} />
                  </span>
                </a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
