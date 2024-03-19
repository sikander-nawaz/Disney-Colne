import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import Header from "@/components/Header";
import MoviesCarousel from "@/components/MoviesCarousael";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function LandingPage() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <Header />
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-[10rem]">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
