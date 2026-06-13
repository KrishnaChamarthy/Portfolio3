import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

const RatingCard = ({ platform, icon: Icon, rating, rank, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white/75 px-4 py-3 text-sm font-semibold transition hover:border-moss hover:text-moss hover:shadow-sm"
    >
      <Icon size={16} />

      {platform}
      {" - "}
      {rating}
      <span className="rounded-full bg-ink/10 px-2.5 py-1 text-[11px] font-bold capitalize leading-none tracking-wide">
        {rank}
      </span>
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
};

RatingCard.propTypes = {
  platform: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rank: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  badgeBg: PropTypes.string.isRequired,
};

export default RatingCard;
