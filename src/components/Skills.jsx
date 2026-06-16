import { sections, skills } from "../constants";
import Section from "./Section";

const Skills = () => {
  return (
    <Section command={sections.skills.command} title={sections.skills.title}>
      <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#050805] shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="flex items-center justify-between border-b gap-2 border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-white/35 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-clay" />
            <span className="h-3 w-3 rounded-full bg-paper" />
            <span className="h-3 w-3 rounded-full bg-moss" />
          </div>
          <span className="text-white/70">krishna@portfolio: ~/skills</span>
          <span className="text-white/45">zsh</span>
        </div>

        <div
          id="skills"
          className="space-y-5 px-4 py-5 font-mono text-sm leading-7 sm:px-6 sm:py-6 sm:text-base"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto">
              <span className="text-moss">krishna@portfolio:~$</span>
              <span className="text-white">cat skills.json</span>
            </div>
            <p className="text-white/80">{`{`}</p>
          </div>

          <div className="space-y-4 pl-3 sm:pl-5">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="space-y-1.5">
                <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto">
                  <span className="text-moss"> {category}:</span>
                </div>
                <div className="pl-4 text-white/88">
                  {items.map((skill, skillIndex) => (
                    <span key={skill}>
                      <span className="text-white transition-colors hover:underline hover:underline-offset-4">
                        {`"${skill}"`}
                      </span>
                      {skillIndex < items.length - 1 && (
                        <span className="text-white/35">, </span>
                      )}
                    </span>
                  ))}
                </div>
                {index < Object.entries(skills).length - 1 && (
                  <p className="text-white/35">{`  ],`}</p>
                )}
                {index === Object.entries(skills).length - 1 && (
                  <p className="text-white/80">{`  ]`}</p>
                )}
              </div>
            ))}
          </div>

          <p className="text-white/80">{`}`}</p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
