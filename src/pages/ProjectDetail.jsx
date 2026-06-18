import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileCode2,
  BookOpen,
  Code2,
  Image as ImageIcon,
  FileText, // Added for the Markdown file tab
} from "lucide-react";
import { projects } from "../constants";

function ProjectDetail() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === projectSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white p-6 text-center font-mono">
        <p className="text-ink/70">Error 404: Project not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 inline-flex items-center gap-2 text-code-blue hover:text-code-blue/75"
        >
          <ArrowLeft size={16} />
          cd ../
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen">
      {/* Header */}
      <header>
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <button
            onClick={() => navigate("/")}
            className="mb-6 inline-flex items-center gap-2 font-mono text-sm font-semibold text-code-blue transition hover:text-code-blue/75"
          >
            <ArrowLeft size={16} />
            cd ../projects
          </button>

          <h1 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">
            {project.name}
          </h1>

          {/* Meta Info Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-ink/50">role</span>
              <span className="text-sm font-semibold text-code-purple">
                {project.role}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-ink/50">timeline</span>
              <span className="text-sm font-semibold text-ink">
                {project.timeline}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-ink/50">type</span>
              <span
                className={`rounded px-2 py-1 text-xs font-bold uppercase tracking-widest ${
                  project.type === "capstone"
                    ? "border border-code-blue/40 bg-code-blue/5 text-code-blue"
                    : project.type === "experience"
                      ? "border border-code-purple/40 bg-code-purple/5 text-code-purple"
                      : "border border-code-green/40 bg-code-green/5 text-code-green"
                }`}
              >
                {project.type}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.sourceCode && project.sourceCode !== "#" && (
                <a
                  href={project.sourceCode}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-code-blue transition hover:bg-paper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileCode2 size={14} />
                  Source
                </a>
              )}
              {project.paper && project.paper !== "#" && (
                <a
                  href={project.paper}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-code-purple transition hover:bg-paper"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BookOpen size={14} />
                  Paper
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-12 sm:px-8">
        {/* TL;DR */}
        <section className="mb-7 border-l-4 border-code-blue/40 bg-code-blue/5 py-5 pl-5 pr-5">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-code-blue/70">
            {" // TL;DR"}
          </p>
          <blockquote className="mt-3 text-base leading-relaxed text-ink">
            {project.summary}
          </blockquote>
        </section>

        {/* Tech Stack - Styled as a Dark IDE Editor Tab */}
        <section className="mb-7 overflow-hidden rounded-lg border border-white/10 bg-ink shadow-soft">
          {/* File Tab */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
            <Code2 size={14} className="text-code-blue" />
            <span className="font-mono text-xs text-white/50">
              dependencies.ts
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-5 font-mono text-sm sm:text-base">
              <span className="font-bold text-code-purple">import</span>{" "}
              <span className="text-white/70">{"{"}</span>{" "}
              <span className="font-semibold text-code-blue">modules</span>{" "}
              <span className="text-white/70">{"}"}</span>{" "}
              <span className="font-bold text-code-purple">from</span>{" "}
              <span className="text-code-green">{'"@/project/stack"'}</span>;
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="group cursor-default rounded border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm shadow-sm transition-all hover:border-moss hover:bg-moss/10"
                >
                  <span className="text-code-green/60 transition-colors group-hover:text-moss">
                    {'"'}
                  </span>
                  <span className="text-white/90">{tech}</span>
                  <span className="text-code-green/60 transition-colors group-hover:text-moss">
                    {'"'}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features - Styled as a Markdown Checklist */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="mb-7">
            <div className="mt-6 overflow-hidden rounded-lg border border-ink/10 shadow-sm">
              {/* File Tab */}
              <div className="flex items-center gap-2 border-b border-ink/5 bg-ink/5 px-4 py-2.5">
                <FileText size={14} className="text-code-green" />
                <span className="font-mono text-xs text-ink/50">
                  features.md
                </span>
              </div>

              <div className="bg-white p-6 sm:p-8">
                <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-sm font-bold text-code-green">
                        [x]
                      </span>
                      <span className="text-sm leading-relaxed text-ink/80">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Architecture & Tech Stack */}
        <section className="mb-7">
          <h2 className="text-2xl font-bold text-ink">
            <span className="text-code-blue">{"//"}</span> Architecture
          </h2>

          {/* Architecture Image Container */}
          {project.architecture.image && (
            <div className="my-6 overflow-hidden rounded-lg border border-ink/10 bg-paper/30 shadow-sm">
              {/* Image Viewer Tab */}
              <div className="flex items-center gap-2 border-b border-ink/5 bg-ink/5 px-4 py-2.5">
                <ImageIcon size={14} className="text-code-purple" />
                <span className="font-mono text-xs text-ink/50">
                  system_diagram.png
                </span>
              </div>

              {/* Image Content */}
              <div className="flex items-center justify-center p-4 sm:p-6 bg-white">
                <img
                  src={
                    new URL(
                      `../assets/${project.architecture.image}`,
                      import.meta.url,
                    ).href
                  }
                  alt={`${project.name} Architecture Diagram`}
                  className="max-h-[500px] w-auto rounded object-contain"
                />
              </div>
            </div>
          )}

          <p className="mt-4 text-ink/72 leading-7">
            {project.architecture.overview}
          </p>
          <ul className="mt-6 space-y-3 border-l-2 border-ink/10 pl-4">
            {project.architecture.tools.map((tool) => (
              <li key={tool} className="text-sm text-ink/70">
                <span className="font-mono text-code-green">→</span> {tool}
              </li>
            ))}
          </ul>
        </section>

        {/* Benchmarks - Dark Terminal Theme */}
        <section className="mb-7">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-ink shadow-soft font-mono">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-clay" />
                <span className="h-3 w-3 rounded-full bg-paper" />
                <span className="h-3 w-3 rounded-full bg-moss" />
              </div>
              <p className="ml-2 text-xs text-white/50">
                <span className="text-moss">❯</span> ./run_benchmarks
                --format=table
              </p>
            </div>

            {/* Terminal Output */}
            <div className="overflow-x-auto p-4 sm:p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-white/40">
                    <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-wider">
                      Metric
                    </th>
                    <th className="pb-3 pr-4 text-xs font-bold uppercase tracking-wider">
                      Value
                    </th>
                    <th className="pb-3 text-xs font-bold uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {project.benchmarks.map((bench) => (
                    <tr
                      key={bench.metric}
                      className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/5"
                    >
                      <td className="py-4 pr-4 text-sm font-semibold text-code-blue">
                        {bench.metric}
                      </td>
                      <td className="py-4 pr-4 text-sm font-bold text-code-green whitespace-nowrap">
                        {bench.value}
                      </td>
                      <td className="min-w-[200px] py-4 text-sm leading-relaxed text-white/70">
                        {bench.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Challenges - Styled as an Issue Tracker */}
        <section className="mb-7">
          <h2 className="mb-6 text-2xl font-bold text-ink">
            <span className="text-code-blue">{"//"}</span> Key Challenges
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {project.challenges.map((challenge, idx) => {
              const [title, ...rest] = challenge.split(": ");
              const description = rest.join(": ");

              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:border-code-purple/40 hover:shadow-md"
                >
                  {/* Issue ID Badge */}
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold text-code-purple">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-code-purple/10">
                      !
                    </span>
                    ISSUE_0{idx + 1}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-ink transition-colors group-hover:text-code-blue">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-ink/72">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </article>
  );
}

export default ProjectDetail;
