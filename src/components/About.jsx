import { about, sections, notableMetrics } from "../constants";
import Section from "./Section";

const About = () => {
  const renderHighlightedJson = (obj, indent = 2) => {
    const spaces = " ".repeat(indent);

    if (typeof obj === "string") {
      return (
        <span className="text-code-green">
          {'"'}
          {obj}
          {'"'}
        </span>
      );
    }
    if (typeof obj === "number") {
      return <span className="text-orange-500">{obj}</span>;
    }
    if (Array.isArray(obj)) {
      if (obj.length === 0) return <span className="text-ink/70">{"[]"}</span>;
      return (
        <span className="text-ink/70">
          {"[\n"}
          {obj.map((val, i) => (
            <span key={i}>
              {spaces}
              {"  "}
              {renderHighlightedJson(val, indent + 2)}
              {i < obj.length - 1 ? ",\n" : "\n"}
            </span>
          ))}
          {spaces}
          {"]"}
        </span>
      );
    }
    if (typeof obj === "object" && obj !== null) {
      const keys = Object.keys(obj);
      if (keys.length === 0) return <span className="text-ink/70">{"{}"}</span>;
      return (
        <span className="text-ink/70">
          {"{\n"}
          {keys.map((key, i) => (
            <span key={key}>
              {spaces}
              <span className="text-code-blue">{key}</span>
              {": "}
              {renderHighlightedJson(obj[key], indent + 2)}
              {i < keys.length - 1 ? ",\n" : "\n"}
            </span>
          ))}
          {" ".repeat(indent - 2)}
          {"}"}
        </span>
      );
    }
    return <span>{String(obj)}</span>;
  };

  return (
    <Section command={sections.about.command} title={sections.about.title}>
      <div
        id="about"
        className="grid gap-6 text-sm leading-7 text-ink/75 sm:text-base sm:leading-8"
      >
        <p>
          I am an incoming M.Tech CSE student at{" "}
          <span className="font-semibold text-code-blue">{about.school}</span>,
          with my engineering roots in a B.Tech from{" "}
          <span className="text-code-blue">{about.undergraduateSchool}</span>{" "}
          (CGPA: <span className="text-code-green">{about.cgpa}</span>). While
          my focus has naturally evolved over the years, my core drive remains
          the same: writing code that is highly scalable, incredibly fast, and
          architecturally sound.
        </p>

        <p>
          I enjoy tackling the intricacies of low-level systems just as much as
          optimizing complex data models. Whether it is digging into Linux
          user-space to build live-patching frameworks or designing custom NLP
          retrieval pipelines, I thrive on engineering solutions that bridge the
          gap between heavy infrastructure and intelligent data processing.
        </p>

        <div>
          <h3 className="mb-2 font-bold text-ink">
            <span className="text-code-blue">{"//"}</span> WHAT I DO
          </h3>
          <ul className="grid gap-2">
            {[
              "Architect zero-data-loss streaming pipelines capable of processing thousands of events per minute.",
              "Build highly available, fault-tolerant distributed file systems with custom network protocols.",
              "Develop machine learning engines from scratch for sub-millisecond, real-time predictions.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-code-green">&gt;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-ink">
            <span className="text-code-blue">{"//"}</span> BEYOND THE TERMINAL
          </h3>
          <p>
            When I am not profiling C++ applications or training PyTorch models,
            I am usually competing in algorithmic programming contests or
            building projects at hackathons.
          </p>
        </div>

        <pre className="mt-2 overflow-x-auto rounded-lg border border-ink/10 bg-white p-5 text-sm leading-7 shadow-sm">
          <code className="font-mono">
            <span className="text-code-purple">const </span>
            <span className="font-semibold text-ink">notableMetrics</span>
            <span className="text-ink/70"> = </span>
            {renderHighlightedJson(notableMetrics)}
            <span className="text-ink/70">;</span>
          </code>
        </pre>
      </div>
    </Section>
  );
};

export default About;
