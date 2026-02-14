import { Star } from "lucide-react";
import type { IMovies } from "../../types/movies";

const ContinueMovieCard = (props: IMovies) => {

  const { title, rating } = props;

  return (
    <div className="relative min-w-75 h-45 rounded-xl overflow-hidden group cursor-pointer">
      {/* Poster Film */}
      <img
        src={props.imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay Gradasi & Teks */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-sm sm:text-lg truncate mr-2">
            {title}
          </h2>
          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-md">
            <Star size={12} className="text-white fill-white" />
            <span className="text-white text-xs sm:text-sm font-normal">
              {rating}/5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContinueMovieCard;