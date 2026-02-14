import MovieCard from "../components/MovieCard";
import type { IMovies } from "../../types/movies";

interface Movie extends IMovies {
  [key: string]: string | number | undefined;
}

interface MovieSectionProps {
  title: string;
  data: Movie[];
  CardComponent?: React.ElementType;
}

const MovieSection = ({ title, data, CardComponent = MovieCard }: MovieSectionProps) => {
  return (
    <section className="px-5 pt-5 sm:px-20 sm:pt-10">
      <h1 className="text-white text-xl sm:text-[32px] font-bold mb-6 tracking-wide">
        {title}
      </h1>
      
      {/* Container Scroll */}
      <div className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {data.map((movie, index) => (
          <div key={movie.id || index} className="snap-start">
            <CardComponent {...movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;