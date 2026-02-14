import type { IMovies } from "../../types/movies";
import Badge from "./Badge";

function MovieCard(props: IMovies) {
  const { title, imageUrl, badge } = props; 

  return (
    <div className="relative w-25 sm:w-60 group cursor-pointer">
      <div className="relative aspect-2/3 w-full rounded-xl overflow-hidden border border-gray-800 shadow-lg">
        {/* Poster Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Kondisi 1: Muncul di kiri jika badge adalah Episode Baru */}
        {badge === "Episode Baru" && (
          <div className="absolute top-2 left-2">
            <Badge variant="new-episode">{badge}</Badge>
          </div>
        )}

        {/* Kondisi 2: Muncul di kanan jika badge adalah Top 10 */}
        {badge === "Top 10" && (
          <div className="absolute top-0 right-2">
            <Badge variant="top-10">{badge}</Badge>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;