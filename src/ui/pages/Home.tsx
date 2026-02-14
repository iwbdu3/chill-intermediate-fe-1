import continueMovies from "../../const/continueMovies";
import ContinueMovieCard from "../components/ContinueMovieCard";
import topRatedMovies from "../../const/topRatedMovies";
import trendingFilm from "../../const/trendingFilm";
import newMovies from "../../const/newMovies";
import MovieSection from "../container/MovieSection";
import Footer from "../container/Footer";
import HeroSection from "../container/HeroSection";

function Home() {
  return (
    <div className="relative w-full bg-[#181A1C]">
      {/* hero section */}
      <HeroSection/>

      {/* continue watching section */}
      <MovieSection
        title="Melanjutkan Tonton Film"
        data={continueMovies}
        CardComponent={ContinueMovieCard}
      />

      {/* top rated movies section */}
      <MovieSection
        title="Top Rating Film dan Series Hari Ini"
        data={topRatedMovies}
      />

      {/* trending film section */}
      <MovieSection title="Film Trending" data={trendingFilm} />

      {/* new movies section */}
      <MovieSection title="Rilis Baru" data={newMovies} />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
