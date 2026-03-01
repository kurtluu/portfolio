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
  { id: "contact", label: "Contact" },
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
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "mailto:you@example.com", label: "Email" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const year = useMemo(() => new Date().getFullYear(), []);

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

      <div className="layout container">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div>
              <p className="kicker">Kurt</p>
              <h1>Frontend Developer</h1>
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
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
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
