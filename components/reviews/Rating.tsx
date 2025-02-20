import { FaStar, FaRegStar } from "react-icons/fa";
function Rating({ rating }: { rating: number }) {
  const starts = Array.from({ length: 5 }, (_, index) => index + 1 <= rating);
  return (
    <div className="flex items-center gap-x-1">
      {starts.map((isFill, index) => {
        const className = `w-3 h-3 ${
          isFill ? "text-primary" : "text-grey-400"
        }`;
        return isFill ? (
          <FaStar className={className} key={index} />
        ) : (
          <FaRegStar className={className} key={index} />
        );
      })}
    </div>
  );
}

export default Rating;
