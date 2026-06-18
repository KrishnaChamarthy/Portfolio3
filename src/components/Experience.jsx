import { useEffect, useRef, useState } from "react";
import { experiences, sections, terminalTokens } from "../constants";
import Section from "./Section";

function Experience() {
  const timelineEntries = experiences;
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const updateActiveItem = () => {
      const viewportAnchor = window.innerHeight * 0.45;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, index) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportAnchor);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    let frameId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveItem);
    };

    updateActiveItem();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeEntry = itemRefs.current[activeIndex];
  const markerTop = activeEntry
    ? activeEntry.offsetTop + activeEntry.offsetHeight / 2
    : 0;

  return (
    <Section
      command={sections.experience.command}
      title={sections.experience.title}
    >
      <div id="experience" className="relative lg:pl-12">
        <div className="absolute left-3 top-0 h-full w-px bg-ink/10 lg:left-12" />
        <div
          className="absolute left-3 top-0 w-px bg-gradient-to-b from-code-blue via-code-purple to-code-green opacity-80 transition-[transform,height] duration-300 lg:left-12"
          style={{
            height: `${markerTop}px`,
          }}
        />

        <div className="grid gap-4 lg:gap-6">
          {timelineEntries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                className="grid gap-4 lg:grid-cols-[3rem_1fr] lg:gap-6"
                key={`${entry.kind}-${entry.org}-${entry.timeframe}`}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
              >
                <div className="relative hidden lg:block">
                  <span className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-ink/15" />
                  <span
                    className={`absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 transition-colors duration-300 ${
                      isActive
                        ? "border-moss bg-moss"
                        : "border-ink/25 bg-white"
                    }`}
                  />
                </div>

                <article
                  className={`rounded-lg border p-6 shadow-sm transition duration-300 ${
                    isActive
                      ? "border-moss/40 bg-gradient-to-br from-white via-white to-paper shadow-soft"
                      : "border-ink/10 bg-white/90"
                  }`}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded px-2 py-1 text-xs font-mono font-bold uppercase tracking-widest ${
                        entry.kind === "education"
                          ? "border border-code-blue/40 bg-code-blue/5 text-code-blue"
                          : "border border-code-purple/40 bg-code-purple/5 text-code-purple"
                      }`}
                    >
                      {entry.kind}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-ink/50">
                      {entry.timeframe}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-ink/85"
                    }`}
                  >
                    {entry.kind === "education" ? entry.degree : entry.role}
                  </h3>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-code-purple/75">
                    {entry.org}
                  </p>
                  <p className="mt-3 border-l-2 border-ink/10 pl-3 text-sm leading-6 text-ink/70">
                    {entry.summary}
                  </p>

                  <div className="mt-5 space-y-2">
                    {entry.highlights.map((highlight) => (
                      <div
                        className="flex gap-3 text-xs sm:text-sm leading-6 text-ink/70"
                        key={highlight}
                      >
                        <span className="flex-shrink-0 pt-1 font-mono text-code-green">
                          {terminalTokens.diffAdded}
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
