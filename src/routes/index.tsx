import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-network.jpg";
import cvAsset from "@/assets/cv.pdf.asset.json";
import deckAsset from "@/assets/presentation.pptx.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akonaho Eugene Ralinala | IT Support & Networking Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Akonaho Eugene Ralinala, IT support and networking trainee in Johannesburg: Cisco skills, certifications, projects and contact details.",
      },
      { property: "og:title", content: "Akonaho Eugene Ralinala | IT Support & Networking Portfolio" },
      {
        property: "og:description",
        content:
          "Cisco-trained networking and IT support portfolio: projects, certifications, skills and contact details.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const TECH_SKILLS = [
  "Wireless configuration (WAP / WLAN)",
  "VLAN design & subnetting",
  "Switching technologies",
  "Cisco routers & switches",
  "Routing protocols: OSPF, BGP, EIGRP",
  "Network troubleshooting",
  "Computer hardware diagnostics",
  "Windows operating system support",
  "Cisco Packet Tracer",
  "Network operations management",
];

const SOFT_SKILLS = [
  "Critical thinking",
  "Problem solving",
  "Time management",
  "Clear communication",
  "Willingness to learn",
  "Teamwork",
];

const PROJECTS = [
  {
    title: "DHCP & Wireless Office Network",
    summary:
      "Designed and configured a wireless office network with a central DHCP server handing out addressing automatically, plus secured wireless access for staff devices.",
    tech: ["Cisco Packet Tracer", "DHCP", "WAP / WLAN", "Wireless security"],
  },
  {
    title: "Small Office Network Setup",
    summary:
      "Built a complete small office network from scratch: router and switch configuration, IP addressing plan, internet access and end-device connectivity testing.",
    tech: ["Cisco routers", "Switching", "Subnetting", "Troubleshooting"],
  },
  {
    title: "VLAN Segmentation Project",
    summary:
      "Separated departments into their own VLANs with trunking and inter-VLAN routing, improving broadcast control and network security between groups.",
    tech: ["VLANs", "Trunking (802.1Q)", "Inter-VLAN routing", "Cisco IOS"],
  },
];

const CERTIFICATIONS = [
  "Networking Basics — Cisco Networking Academy via Sci-Bono Discovery Centre, 2026",
  "Operating Systems Support — Cisco Networking Academy via Sci-Bono, 2026",
  "Getting Started with Cisco Packet Tracer — Cisco via Sci-Bono, 2026",
  "Computer Hardware Basics — Cisco Networking Academy via Sci-Bono, 2026",
  "Network and Support — Cisco Networking Academy via Sci-Bono, 2026",
  "Build a free website with WordPress — Coursera Project Network, 2026",
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight md:text-base">
            Akonaho<span className="text-gradient"> Ralinala</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a className="transition-colors hover:text-primary" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvAsset.url}
            download="Akonaho_Ralinala_CV.pdf"
            className="rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:text-sm"
          >
            Download CV
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-surface relative overflow-hidden">
          <img
            src={heroImage}
            alt=""
            width={1920}
            height={1088}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:py-32">
            <div>
              <p className="eyebrow">IT Support · Networking · Cybersecurity</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Akonaho Eugene <span className="text-gradient">Ralinala</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Cisco-trained IT support and networking trainee from Soweto, Johannesburg. I
                configure and troubleshoot networks — wireless, VLANs, routing and switching — and
                I am working towards a career in cybersecurity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View my projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="panel p-6 md:p-8" style={{ boxShadow: "var(--shadow-glow)" }}>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="eyebrow">Based in</dt>
                  <dd className="mt-1">Meadowlands West, Soweto, Johannesburg</dd>
                </div>
                <div>
                  <dt className="eyebrow">Focus</dt>
                  <dd className="mt-1">Network support, Tier 2/3 support concepts, cybersecurity</dd>
                </div>
                <div>
                  <dt className="eyebrow">Trained at</dt>
                  <dd className="mt-1">Sci-Bono Discovery Centre — Cisco Networking Academy</dd>
                </div>
                <div>
                  <dt className="eyebrow">Status</dt>
                  <dd className="mt-1">Open to internships and entry-level IT support roles</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About me" title="Curious about how networks really work">
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a motivated IT support trainee with networking training from Sci-Bono Discovery
              Centre. My training covered wireless configuration, VLANs and subnetting, Cisco
              routers and switches, and routing protocols such as OSPF, BGP and EIGRP. I enjoy the
              troubleshooting side of the work — finding out why something is not connecting and
              fixing it properly.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I am currently preparing for international certification exams and building practical
              lab projects in Cisco Packet Tracer. My long-term goal is cybersecurity, and I am
              eager to gain hands-on experience in a support or analyst environment where I can keep
              learning from experienced engineers.
            </p>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical and soft skills">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">Technical</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {TECH_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">Soft skills</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-primary/30 px-3 py-1.5 text-xs text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Networking labs I have built">
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.title} className="panel flex flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education & experience" title="Where I have learned">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">BSc in Mathematics and Computer Science</h3>
              <p className="mt-1 text-sm text-primary">University of South Africa (UNISA)</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Currently in second year. Combining theoretical computer science and mathematics
                with practical IT and networking skills.
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">ICT & Networking Training</h3>
              <p className="mt-1 text-sm text-primary">
                Sci-Bono Discovery Centre — Cisco Networking Academy
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Practical training in networking, computer hardware, operating systems support and
                network troubleshooting, with hands-on labs in Cisco Packet Tracer.
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">Matric (Grade 12)</h3>
              <p className="mt-1 text-sm text-primary">Lamula Jubilee Secondary School, Soweto</p>
              <p className="mt-3 text-sm text-muted-foreground">Completed 2024.</p>
            </div>
          </div>
        </Section>

        <Section id="certifications" eyebrow="Certifications" title="Cisco Networking Academy">
          <ul className="grid gap-4 md:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert} className="panel flex items-start gap-3 p-5 text-sm">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                />
                <span className="text-muted-foreground">{cert}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="panel p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am available for internships, learnerships and entry-level IT support positions.
                The quickest way to reach me is by email or phone.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <span className="eyebrow">Email</span>
                  <br />
                  <a className="text-primary hover:underline" href="mailto:ralinalaakonaho@gmail.com">
                    ralinalaakonaho@gmail.com
                  </a>
                </li>
                <li>
                  <span className="eyebrow">Phone</span>
                  <br />
                  <a className="text-primary hover:underline" href="tel:+27718229824">
                    071 822 9824
                  </a>
                </li>
                <li>
                  <span className="eyebrow">LinkedIn</span>
                  <br />
                  <a
                    className="text-primary hover:underline"
                    href="https://www.linkedin.com/search/results/all/?keywords=Akonaho%20Eugene%20Ralinala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Akonaho Eugene Ralinala
                  </a>
                </li>
                <li>
                  <span className="eyebrow">GitHub</span>
                  <br />
                  <a
                    className="text-primary hover:underline"
                    href="https://github.com/Eugenix925"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/Eugenix925
                  </a>
                </li>
              </ul>
            </div>
            <div className="panel flex flex-col justify-between p-6 md:p-8">
              <div>
                <h3 className="text-lg font-semibold">Download my CV</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A full PDF copy of my skills, education, certifications and references.
                </p>
              </div>
              <a
                href={cvAsset.url}
                download="Akonaho_Ralinala_CV.pdf"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Akonaho Eugene Ralinala</p>
          <p>Soweto, Johannesburg, South Africa</p>
        </div>
      </footer>
    </div>
  );
}
