import {
  ArrowUpRight,
  FileCode2,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from 'lucide-react'
import PropTypes from 'prop-types'

const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:hello@example.com' },
  { label: 'Resume', href: '/KrishnaChamarthy_Resume.pdf' },
]

const coursework = [
  'High Performance Computing',
  'Distributed and Cloud Computing',
  'Machine Learning',
]

const experiences = [
  {
    role: 'Software Engineer Intern',
    org: 'Northern Trust Corporation',
    commits: [
      'Architected a real-time Kafka streaming pipeline handling 50,000 events/minute.',
      'Reduced processing latency by 85% across high-throughput ingestion paths.',
      'Deployed a data observability platform that reduced anomaly detection time by 70%.',
    ],
  },
]

const projects = [
  {
    name: 'User-Space Runtime Function Interposition',
    tech: ['C', 'Linux', 'ptrace', 'x86-64'],
    description:
      'Live-patching framework for runtime function interposition using ptrace and x86-64 architecture, benchmarked at 4.35ms patch latency.',
    linkLabel: 'paper',
    href: '#',
  },
  {
    name: 'Real-Time CTR Prediction Engine',
    tech: ['PyTorch', 'Kafka', 'Python'],
    description:
      'High-throughput prediction service combining PyTorch inference with Kafka streams, achieving sub-1ms prediction latency.',
    href: '#',
  },
  {
    name: 'RepoScope',
    tech: ['Embeddings', 'Ollama', 'IR'],
    description:
      'Embedding-based repository retrieval system using local LLM models, reaching 92% search relevance across 10,000+ files.',
    href: '#',
  },
  {
    name: 'Distributed File System',
    tech: ['C++', 'TCP/IP', 'gRPC'],
    description:
      'Distributed storage system with a custom TCP/IP protocol and gRPC control plane designed for 99.9% data availability.',
    href: '#',
  },
]

const skills = {
  core: ['Distributed Systems', 'Linux', 'System Design', 'Information Retrieval'],
  languages: ['C++', 'Python', 'Java', 'C'],
  frameworks_tools: ['PyTorch', 'Kafka', 'Docker', 'Spring Boot'],
}

const achievements = [
  'Secured AIR 118 in GATE CSE, 2026.',
  'LeetCode Knight (Top 3%) and Codeforces Specialist.',
  'Ranked Top 2 at HACKMIT 2025.',
]

function Section({ command, title, children }) {
  return (
    <section className="border-t border-ink/10 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[10rem_1fr] lg:px-10">
        <div className="text-sm text-ink/45">
          <p className="sticky top-6">{command}</p>
        </div>
        <div>
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-ink sm:text-3xl">
            <span className="text-clay">{title}</span>
            <span className="h-6 w-3 animate-cursor bg-moss" />
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}

Section.propTypes = {
  command: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

function App() {
  return (
    <main className="min-h-screen bg-paper font-mono text-ink">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a className="flex items-center gap-2 text-sm font-semibold" href="/">
          <Terminal size={18} />
          krishna.dev
        </a>
        <div className="hidden items-center gap-1 rounded-lg border border-ink/10 bg-white/70 p-1 shadow-sm sm:flex">
          {['about.txt', 'experience.sh', 'projects', 'skills.json'].map((tab) => (
            <a
              className="rounded-md px-3 py-2 text-xs font-semibold text-ink/65 transition hover:bg-paper hover:text-ink"
              href={`#${tab.split('.')[0]}`}
              key={tab}
            >
              {tab}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1fr_18rem] lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold text-moss">
            {'> Hello, World. I\'m Krishna Chamarthy.'}
            <span className="ml-2 inline-block h-5 w-3 translate-y-1 animate-cursor bg-moss" />
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
            Incoming M.Tech CSE student at IIT Kanpur.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink/70 sm:text-lg">
            I work at the intersection of{' '}
            <span className="text-code-blue">distributed systems</span>,{' '}
            <span className="text-code-purple">machine learning</span>, and{' '}
            <span className="text-code-green">information retrieval</span>,
            building systems that are fast, observable, and useful.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white/75 px-4 py-3 text-sm font-semibold transition hover:border-moss hover:text-moss hover:shadow-sm"
                href={link.href}
                key={link.label}
              >
                ./open {link.label.toLowerCase()}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>

        <aside className="overflow-hidden rounded-lg border border-ink/10 bg-ink shadow-soft">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-clay" />
            <span className="h-3 w-3 rounded-full bg-paper" />
            <span className="h-3 w-3 rounded-full bg-moss" />
            <p className="ml-2 text-xs text-white/55">portrait.png</p>
          </div>
          <div className="flex aspect-[4/5] min-h-[320px] items-center justify-center p-6">
            <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-paper/35 bg-paper/5 text-center text-sm leading-6 text-white/60">
              Add your image here
            </div>
          </div>
        </aside>
      </section>

      <Section command="cat about.txt" title="About Me">
        <div id="about" className="grid gap-4 text-sm leading-7 text-ink/75">
          <p>
            I am an incoming M.Tech CSE student at{' '}
            <span className="text-code-blue">IIT Kanpur</span>, with a B.Tech
            from <span className="text-code-blue">MIT World Peace University</span>{' '}
            and a CGPA of <span className="text-code-green">8.77</span>.
          </p>
          <pre className="overflow-x-auto rounded-lg border border-ink/10 bg-white p-5 text-sm leading-7 shadow-sm">
            <code>{`coursework = ${JSON.stringify(coursework, null, 2)}`}</code>
          </pre>
        </div>
      </Section>

      <Section command="./run_experience.sh" title="Experience">
        <div id="experience" className="grid gap-4">
          {experiences.map((experience) => (
            <article
              className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm"
              key={experience.org}
            >
              <p className="text-sm text-code-purple">{'commit 85c0ffee'}</p>
              <h3 className="mt-2 text-xl font-bold">
                {experience.role} @ {experience.org}
              </h3>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-ink/72">
                {experience.commits.map((commit) => (
                  <li className="flex gap-3" key={commit}>
                    <span className="text-code-green">+</span>
                    <span>{commit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section command="ls -la /projects" title="Featured Projects">
        <div id="projects" className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              key={project.name}
            >
              <div className="mb-4 flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                <div>
                  <p className="text-xs text-ink/45">drwxr-xr-x</p>
                  <h3 className="mt-2 text-lg font-bold">{project.name}</h3>
                </div>
                <a
                  className="rounded-md p-2 text-moss transition hover:bg-paper"
                  href={project.href}
                  aria-label={`Open ${project.name}`}
                >
                  <FileCode2 size={18} />
                </a>
              </div>
              <p className="text-sm leading-7 text-ink/70">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-code-blue"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
                {project.linkLabel ? (
                  <a
                    className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-moss underline decoration-moss/30 underline-offset-4"
                    href={project.href}
                  >
                    {project.linkLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section command="skills.json" title="Skills">
        <div id="skills" className="rounded-lg border border-ink/10 bg-ink p-5 shadow-soft">
          <pre className="overflow-x-auto text-sm leading-7 text-white/82">
            <code>{JSON.stringify(skills, null, 2)}</code>
          </pre>
        </div>
      </Section>

      <Section command="stdout" title="Achievements">
        <div className="grid gap-3">
          {achievements.map((achievement) => (
            <p
              className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink/78 shadow-sm"
              key={achievement}
            >
              <span className="mr-3 text-code-green">stdout:</span>
              {achievement}
            </p>
          ))}
        </div>
      </Section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-xs text-ink/45 sm:px-8 lg:px-10">
        <p>Krishna Chamarthy</p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-moss" href="mailto:hello@example.com">
            <Mail size={14} className="mr-1 inline" />
            email
          </a>
          <a className="hover:text-moss" href="https://github.com/">
            <Github size={14} className="mr-1 inline" />
            github
          </a>
          <a className="hover:text-moss" href="https://www.linkedin.com/">
            <Linkedin size={14} className="mr-1 inline" />
            linkedin
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
