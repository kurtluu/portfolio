import { useEffect, useState } from "react";
import type { PointerEvent } from "react";
import hclTechLogo from "./assets/HCLTech-logo.svg";
import microsoftLogo from "./assets/msft-logo.svg";
import tapLogo from "./assets/tap-logo.png";

type NavItem = {
  id: string;
  label: string;
};

type TimelineItem = {
  period: string;
  title: string;
  company: string;
  logoUrl?: string;
  description: string;
  tags: string[];
};

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const timeline: TimelineItem[] = [
  {
    period: "MAR - OCT 2025",
    title: "Senior Technical Lead · HCLTech",
    company: "HCLTech",
    logoUrl: hclTechLogo,
    description:
      "Transitioned from Microsoft to HCLTech to support platform continuity during a strategic divestiture.",
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
    logoUrl: microsoftLogo,
    description:
      "Deployed web-based customer support experiences used by Fortune 500 enterprises across multiple industries, including Virtual Assistants, Live Chat, SMS, and API/SDK Integrations. Focused on building customizable user interfaces and interaction workflows that supported scalable customer communication platforms. Also collaborated with conversational AI and cross-functional teams to integrate automated assistants with live agent systems.",
    tags: ["JavaScript", "HTML/CSS", "Node.js", "Business Rules", "Python", "REST APIs", "SQL", "Azure"],
  },
  {
    period: "2018 - 2020",
    title: "Jr. Software Developer · TAP Series LLC",
    company: "TAP Series LLC",
    logoUrl: tapLogo,
    description:
      "Developed and maintained web-based applications for an e-learning platform, building responsive interfaces and interactive training modules. Contributed across both front-end and back-end development to support new features and improve platform usability. Also helped automate several internal workflows and operational systems, including data processing pipelines, reporting tools, and document generation processes. Improved internal administrative tools and reporting systems to make them faster and easier for internal teams to use.",
    tags: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Python", "Angular", "AWS", "Bootstrap", "Draggable.js", "pandas"],
  },
];

const projects: Project[] = [
  {
    title: "Playlist-dl",
    description:
      "Web app for searching songs and converting them into downloadable audio. View and download individual tracks, process Spotify or Soundcloud playlists into matched songs, and export as ZIP files of MP3s with metadata tagging.",
    tags: ["React", "Next.js", "Node.js", "Spotify API", "Soundcloud API"],
  },  
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio site featuring responsive sections, theme switching, and custom UI styling focused on clean UX and performance.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS", "Vercel"],
  },
];

const socialLinks = [
  { href: "https://github.com/kurtluu", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kurtluu/", label: "LinkedIn" },
  { href: "mailto:kurtluu12@gmail.com", label: "Email" },
];

type Theme = "dark" | "light";

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
  const [activeId, setActiveId] = useState("about");
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

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-10% 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleCardPointerMove = (event: PointerEvent<HTMLElement>) => {
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

            <nav id="section-nav" className="section-nav" aria-label="Section navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  className={`nav-link ${activeId === item.id ? "active" : ""}`.trim()}
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-link"
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
          <section id="about" className="content-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">About</h2>
            </div>
            <p>
              Hi, I'm Kurt! I'm a frontend-leaning software engineer driven by the idea that great software is both technically
              sound and beautifully crafted. I'm especially interested in building systems and interfaces that are
              scalable, accessible, and thoughtfully designed.
            </p>
            <p>
              My experience includes leading global deployments for enterprise clients, developing internal automation
              tools to improve operational efficiency, and collaborating across cross-functional teams to ship reliable
              software at scale. Working across distributed systems and real-world production environments has shaped
              how I approach architecture, performance, and maintainability.
            </p>
            <p>
              Today, I'm focused on exploring AI and LLM technologies — including prompt engineering and applied AI workflows — while 
              continuing to build modern frontend applications.
            </p>
            <p>
              When I'm not coding, you'll likely catch me on the mats training Brazilian jiu-jitsu or lifting in my garage gym. I also enjoy playing tennis,
              snowboarding, mixing music and gaming.
            </p>
          </section>

          <section id="experience" className="content-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">Experience</h2>
            </div>
            {timeline.map((item) => (
              <article
                key={item.title}
                className="timeline-item"
                onPointerMove={handleCardPointerMove}
                onPointerLeave={handleCardPointerLeave}
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
                  <h3>{item.title}</h3>
                  <p className="period">{item.period}</p>
                  <p>{item.description}</p>
                  <ul className="tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section id="projects" className="content-section projects-section">
            <div className="section-heading">
              <h2 className="font-bold uppercase tracking-widest">Projects</h2>
            </div>
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card"
                onPointerMove={handleCardPointerMove}
                onPointerLeave={handleCardPointerLeave}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>          

          <footer className="footer">
            <p>Built with React and Tailwind CSS. Design inspired by Peter Steinberger, Yangshun Tay, and Brittany Chiang.</p>
            <div className="footer-icons" aria-label="Footer social links">
              {socialLinks.map((link) => (
                <a
                  key={`footer-${link.label}`}
                  className="footer-icon-link"
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


