import { about, sections, terminalTokens } from '../constants'
import Section from './Section'

function About() {
  return (
    <Section command={sections.about.command} title={sections.about.title}>
      <div id="about" className="grid gap-4 text-sm leading-7 text-ink/75">
        <p>
          I am an incoming M.Tech CSE student at{' '}
          <span className="text-code-blue">{about.school}</span>, with a B.Tech
          from{' '}
          <span className="text-code-blue">{about.undergraduateSchool}</span>{' '}
          and a CGPA of <span className="text-code-green">{about.cgpa}</span>.
        </p>
        <pre className="overflow-x-auto rounded-lg border border-ink/10 bg-white p-5 text-sm leading-7 shadow-sm">
          <code>
            {`${terminalTokens.courseworkLabel} = ${JSON.stringify(
              about.coursework,
              null,
              2,
            )}`}
          </code>
        </pre>
      </div>
    </Section>
  )
}

export default About
