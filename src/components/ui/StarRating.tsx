import { StarEmptyIcon, StarFullIcon, StarHalfIcon } from "@/icons";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array(fullStars)
        .fill(null)
        .map((_, idx) => (
          <span key={`full-${idx}`}>
            <StarFullIcon />
          </span>
        ))}
      {hasHalfStar && (
        <span>
          <StarHalfIcon />
        </span>
      )}
      {Array(emptyStars)
        .fill(null)
        .map((_, idx) => (
          <span key={`empty-${idx}`}>
            <StarEmptyIcon />
          </span>
        ))}
    </div>
  );
};

export default StarRating;
