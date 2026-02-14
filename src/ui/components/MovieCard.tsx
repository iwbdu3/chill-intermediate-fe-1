import type { IMovies } from "../../types/movies";

function MovieCard(props: IMovies) {
  const { title, imageUrl } = props;

  return (
    <div className="relative w-25 sm:w-60 group cursor-pointer">
      <div className="relative aspect-2/3 w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default MovieCard;
