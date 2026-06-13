import { experiences, sections, terminalTokens } from '../constants'
import Section from './Section'

function Experience() {
  return (
    <Section
      command={sections.experience.command}
      title={sections.experience.title}
    >
      <div id="experience" className="grid gap-4">
        {experiences.map((experience) => (
          <article
            className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm"
            key={experience.org}
          >
            <p className="text-sm text-code-purple">
              {terminalTokens.commitPrefix} {experience.hash}
            </p>
            <h3 className="mt-2 text-xl font-bold">
              {experience.role} @ {experience.org}
            </h3>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-ink/72">
              {experience.commits.map((commit) => (
                <li className="flex gap-3" key={commit}>
                  <span className="text-code-green">
                    {terminalTokens.diffAdded}
                  </span>
                  <span>{commit}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
