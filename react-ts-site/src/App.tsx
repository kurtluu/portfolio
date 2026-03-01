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
    period: "2024 - Present",
    title: "Frontend Developer · Freelance",
    description:
      "Built responsive web apps and marketing sites for small businesses, focusing on conversion, maintainability, and fast page performance.",
    tags: ["TypeScript", "React", "Next.js", "CSS"],
  },
  {
    period: "2022 - 2024",
    title: "Web Developer · Product Team",
    description:
      "Collaborated with design and backend teams to ship core user-facing features, improve accessibility, and reduce frontend bundle size across the platform.",
    tags: ["JavaScript", "Node.js", "REST APIs", "Jest"],
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
    title: "Personal Portfolio v2",
    description:
      "Lightweight portfolio template emphasizing content hierarchy, speed, and reusable sections.",
    tags: ["React", "TypeScript", "Vite"],
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
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.1c-3.3.7-4-1.6-4-1.6a3.1 3.1 0 0 0-1.3-1.8c-1.1-.7.1-.7.1-.7a2.5 2.5 0 0 1 1.8 1.2 2.5 2.5 0 0 0 3.4 1 2.5 2.5 0 0 1 .7-1.6c-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.3a11.2 11.2 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.8 5.7-5.5 6a2.8 2.8 0 0 1 .8 2.2v3.2c0 .4.2.7.8.6A12 12 0 0 0 12 .5z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm2.6 6.5A1.4 1.4 0 1 1 7.6 6.7a1.4 1.4 0 0 1 0 2.8zM9 17H6.3V10H9v7zm8.7 0H15v-3.4c0-.8 0-1.9-1.2-1.9S12.4 12.6 12.4 13.5V17H9.8V10h2.5v1c.4-.7 1.2-1.2 2.4-1.2 2.6 0 3.1 1.7 3.1 3.9V17z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.9">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
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
          {theme === "dark" ? "☀" : "☾"}
        </span>
      </button>

      <div className="layout container">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div>
              <h1 className="name">Kurt Luu</h1>
              <p className="kicker">Software Engineer</p>
              <p className="subtitle">
                I build clean, performant interfaces with strong UX and maintainable code.
              </p>
            </div>

            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="section-nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Sections
            </button>

            <nav
              id="section-nav"
              className={`section-nav ${menuOpen ? "open" : ""}`.trim()}
              aria-label="Section navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  className={`nav-link ${activeId === item.id ? "active" : ""}`.trim()}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="socials" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
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
            <h2>About</h2>
            <p>
              I enjoy building digital products that feel fast and intentional. My approach combines practical
              engineering with product-focused design decisions, so users get intuitive experiences and teams get
              systems they can maintain.
            </p>
            <p>
              I work mostly with JavaScript/TypeScript, React, and modern CSS. I care a lot about accessibility,
              performance, and delivering value quickly without sacrificing quality.
            </p>
          </section>

          <section id="experience" className="content-section">
            <h2>Experience</h2>
            {timeline.map((item) => (
              <article key={item.title} className="timeline-item">
                <p className="period">{item.period}</p>
                <div className="item-body">
                  <h3>{item.title}</h3>
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
            <h2>Projects</h2>
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

          <section id="contact" className="content-section">
            <h2>Contact</h2>
            <p>
              I am currently open to freelance and full-time opportunities. If you have a project in mind, send me
              a message and I will get back to you.
            </p>
            <a className="email-link" href="mailto:you@example.com">
              you@example.com
            </a>
          </section>

          <footer className="footer">
            <p>Built by Kurt · {year}</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;

