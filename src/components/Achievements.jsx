import { achievements, sections, terminalTokens } from '../constants'
import Section from './Section'

function Achievements() {
  return (
    <Section
      command={sections.achievements.command}
      title={sections.achievements.title}
    >
      <div className="grid gap-3">
        {achievements.map((achievement) => (
          <p
            className="rounded-lg border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink/78 shadow-sm"
            key={achievement}
          >
            <span className="mr-3 text-code-green">
              {terminalTokens.stdoutLabel}
            </span>
            {achievement}
          </p>
        ))}
      </div>
    </Section>
  )
}

export default Achievements
