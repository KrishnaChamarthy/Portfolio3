import { sections, skills } from '../constants'
import Section from './Section'

function Skills() {
  return (
    <Section command={sections.skills.command} title={sections.skills.title}>
      <div
        id="skills"
        className="rounded-lg border border-ink/10 bg-ink p-5 shadow-soft"
      >
        <pre className="overflow-x-auto text-sm leading-7 text-white/82">
          <code>{JSON.stringify(skills, null, 2)}</code>
        </pre>
      </div>
    </Section>
  )
}

export default Skills
