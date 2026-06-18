import { useNavigate } from "react-router-dom";
import { FileCode2 } from "lucide-react";
import { projects, sections, terminalTokens } from "../constants";
import Section from "./Section";

function Projects() {
  const navigate = useNavigate();

  return (
    <Section
      command={sections.projects.command}
      title={sections.projects.title}
    >
      <div id="projects" className="grid gap-4 md:grid-cols-2 md:auto-rows-fr">
        {projects.map((project) => (
          <button
            onClick={() => navigate(`/projects/${project.slug}`)}
            className="h-full rounded-lg border border-ink/10 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            key={project.name}
          >
            <article className="flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between gap-4 border-b border-ink/10 pb-4">
                <div className="min-w-0">
                  <p className="text-xs text-ink/45">
                    {terminalTokens.fileMode}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-6">
                    {project.name}
                  </h3>
                </div>
                <div className="rounded-md p-2 text-moss">
                  <FileCode2 size={18} />
                </div>
              </div>
              <p
                className="line-clamp-3 text-sm leading-7 text-ink/70"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {project.tech.map((tech) => (
                  <span
                    className="rounded-md bg-paper px-2.5 py-1 text-xs font-semibold text-code-blue"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </button>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
