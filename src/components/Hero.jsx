import { ArrowUpRight, Code, MapPin, Trophy } from "lucide-react";
import {
  hero,
  links,
  terminalTokens,
  CF_HANDLE,
  LC_HANDLE,
} from "../constants";
import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";

const focusColors = ["text-code-blue", "text-code-purple", "text-code-green"];

const Hero = () => {
  const [cfData, setCfData] = useState({ rating: "...", rank: "Loading" });
  const [lcData, setLcData] = useState({ rating: "...", rank: "Loading" });

  useEffect(() => {
    fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setCfData({
            rating: data.result[0].rating || "N/A",
            rank: data.result[0].rank || "Unrated",
          });
        }
      })
      .catch(console.error);

    fetch(`https://alfa-leetcode-api.onrender.com/${LC_HANDLE}/contest`)
      .then((res) => res.json())
      .then((data) => {
        if (data.contestRating) {
          const rating = Math.round(data.contestRating);
          // Simple logic to determine LeetCode badge based on rating
          let rank = "Student";
          if (rating >= 1600) rank = "Knight";
          if (rating >= 2150) rank = "Guardian";

          setLcData({ rating, rank });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1fr_18rem] lg:px-10">
      <div className="max-w-4xl">
        <p className="mb-5 text-sm font-semibold text-moss">
          {hero.prompt}
          <span className="ml-2 inline-block h-5 w-3 translate-y-1 animate-cursor bg-moss" />
        </p>
        <h1 className="text-4xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-ink/70 sm:text-lg">
          {hero.profession}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-ink/70 sm:text-lg">
          {hero.summary.prefix}{" "}
          {hero.summary.focusAreas.map((area, index) => {
            const isLast = index === hero.summary.focusAreas.length - 1;

            return (
              <span key={area}>
                {isLast ? "and " : null}
                <span className={focusColors[index]}>{area}</span>
                {isLast ? ", " : ", "}
              </span>
            );
          })}
          {hero.summary.suffix}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              className="group inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white/75 px-4 py-3 text-sm font-semibold transition hover:border-moss hover:text-moss hover:shadow-sm"
              href={link.href}
              key={link.label}
            >
              {terminalTokens.openCommand} {link.label.toLowerCase()}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <RatingCard
            platform="LeetCode"
            icon={Code}
            rating={`${lcData.rating}`}
            rank={lcData.rank}
            url={`https://leetcode.com/u/${LC_HANDLE}/`}
          />
          <RatingCard
            platform="Codeforces"
            icon={Trophy}
            rating={`${cfData.rating}`}
            rank={cfData.rank}
            url={`https://codeforces.com/profile/${CF_HANDLE}`}
          />
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white/75 px-4 py-3 text-sm font-semibold text-ink/80 shadow-sm">
          <MapPin size={16} className="text-black" />
          <span>{hero.location}</span>
        </div>
      </div>

      <aside className="overflow-hidden rounded-lg border border-ink/10 bg-ink shadow-soft">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-clay" />
          <span className="h-3 w-3 rounded-full bg-paper" />
          <span className="h-3 w-3 rounded-full bg-moss" />
          <p className="ml-2 text-xs text-white/55">{hero.portraitLabel}</p>
        </div>
        <div className="flex aspect-[4/5] min-h-[320px] items-center justify-center p-6">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-paper/35 bg-paper/5 text-center text-sm leading-6 text-white/60">
            {hero.portraitPlaceholder}
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Hero;
