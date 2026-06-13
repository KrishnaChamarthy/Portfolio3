import { Github, Linkedin, Mail } from 'lucide-react'
import { footer } from '../constants'

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-xs text-ink/45 sm:px-8 lg:px-10">
      <p>{footer.name}</p>
      <div className="flex flex-wrap gap-4">
        {footer.links.map((link) => {
          const Icon = icons[link.icon]

          return (
            <a className="hover:text-moss" href={link.href} key={link.label}>
              <Icon size={14} className="mr-1 inline" />
              {link.label}
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
