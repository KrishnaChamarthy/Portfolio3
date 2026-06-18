import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { footer } from "../constants";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-xs text-ink/45 sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-center gap-3 text-sm text-ink/75">
        <p className="font-semibold text-ink">{footer.name}</p>
        <span className="text-ink/25">•</span>
        <span>{footer.title}</span>
        <span className="text-ink/25">•</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="text-code-purple" />
          {footer.location}
        </span>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          className="inline-flex items-center gap-2 hover:text-moss"
          href={`mailto:${footer.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <Mail size={14} />
          {footer.email}
        </a>

        <a
          className="inline-flex items-center gap-2 hover:text-moss"
          href={footer.resume}
          target="_blank"
          rel="noreferrer"
        >
          <ArrowUpRight size={14} />
          Resume
        </a>

        {footer.profiles.map((link) => {
          const Icon = icons[link.icon] || Code2;

          return (
            <a
              className="inline-flex items-center gap-2 hover:text-moss"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={14} />
              {link.label}
            </a>
          );
        })}
      </div>

      <p className="pt-2 text-sm leading-7 text-ink/60">
        Built with React, Vite, and a terminal-inspired visual language.
      </p>
    </footer>
  );
}

export default Footer;
