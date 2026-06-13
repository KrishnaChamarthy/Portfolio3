import PropTypes from 'prop-types'

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

export default Section
