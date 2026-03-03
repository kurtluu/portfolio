import { useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type TimelineItem = {
  period: string;
  title: string;
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
    description:
      "Built responsive web apps and marketing sites for small businesses, focusing on conversion, maintainability, and fast page performance.",
    tags: ["TypeScript", "React", "Next.js", "CSS"],
  },
  {
    period: "2023 - 2025",
    title: "Software Engineer · Microsoft",
    description:
      "Collaborated with design and backend teams to ship core user-facing features, improve accessibility, and reduce frontend bundle size across the platform.",
    tags: ["JavaScript", "Node.js", "REST APIs", "Jest"],
  },
  {
    period: "2020 - 2023",
    title: "Frontend Software Engineer · Nuance",
    description:
      "Collaborated with design and backend teams to ship core user-facing features, improve accessibility, and reduce frontend bundle size across the platform.",
    tags: ["JavaScript", "Node.js", "REST APIs", "Jest"],
  },
  {
    period: "2018 - 2020",
    title: "Jr. Software Developer · TAP Series LLC",
    description:
      "I contributed to full-stack web development projects focused on building responsive, user-friendly applications and internal tools. I developed a mobile-first e-learning platform and designed interactive activity modules with drag-and-drop functionality. I also optimized backend reporting systems, rebuilt performance-critical tools achieving significant speed improvements, and implemented automated PDF invoice generation to reduce operational overhead. This role strengthened my foundation in frontend architecture, backend integration, and performance optimization.",
    tags: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Python", "Angular", "Bootstrap", "jQuery", "AJAX", "Draggable.js", "pandas"],
  },
];

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "Admin dashboard with KPI tracking, filters, and reusable data visualization components.",
    tags: ["React", "TypeScript", "Chart.js"],
  },
  {
    title: "Appointment Platform",
    description:
      "Booking flow with service selection, schedule management, and automated confirmation emails.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio site featuring responsive sections, theme switching, and custom UI styling focused on clean UX and performance.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS"],
  },
];

const socialLinks = [
  { href: "https://github.com/kurtluu", label: "GitHub" },
  { href: "https://www.linkedin.com/in/kurtluu/", label: "LinkedIn" },
  { href: "mailto:.com", label: "Email" },
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
  const year = useMemo(() => new Date().getFullYear(), []);

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

  return (
    <>
      <div className="background-glow" aria-hidden="true" />
      <button
        className="theme-toggle"
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        <span className="theme-icon" aria-hidden="true">
          {theme === "dark" ? "\u2600" : "\u263E"}
        </span>
      </button>

      <div className="layout container">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Kurt Luu</h1>
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
            <h2 className="font-bold uppercase tracking-widest">About</h2>
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
              Today, I'm focused on mastering modern frontend technologies - React, TypeScript, and component-driven
              development - with a strong interest in design systems and building products that feel intuitive and
              refined.
            </p>
            <p>
              When I'm not coding, you'll catch me on the mats training Brazilian jiu-jitsu, in my garge gym lifting weights, playing tennis,
              snowboarding, mixing music or gaming.
            </p>
          </section>

          <section id="experience" className="content-section">
            <h2 className="font-bold uppercase tracking-widest">Experience</h2>
            {timeline.map((item) => (
              <article key={item.title} className="timeline-item">
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

          <section id="projects" className="content-section">
            <h2 className="font-bold uppercase tracking-widest">Projects</h2>
            {projects.map((project) => (
              <article key={project.title} className="project-card">
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






