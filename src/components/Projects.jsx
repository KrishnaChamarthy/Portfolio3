import { FileCode2 } from 'lucide-react'
import { projects, sections, terminalTokens } from '../constants'
import Section from './Section'

function Projects() {
  return (
    <Section command={sections.projects.command} title={sections.projects.title}>
      <div id="projects" className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            key={project.name}
          >
            <div className="mb-4 flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <p className="text-xs text-ink/45">{terminalTokens.fileMode}</p>
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
            <p className="text-sm leading-7 text-ink/70">
              {project.description}
            </p>
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
  )
}

export default Projects
