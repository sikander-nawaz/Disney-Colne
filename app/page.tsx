import React from "react";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import Header from "@/components/Header";
import MoviesCarousel from "@/components/MoviesCarousael";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LandingPage from "@/components/landingPage/LandingPage";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      {session ? (
        <>
          <Header />
          <CarouselBannerWrapper />

          <div className="flex flex-col space-y-2 xl:-mt-48">
            <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
            <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
            <MoviesCarousel movies={popularMovies} title="Popular" />
          </div>
        </>
      ) : (
        <LandingPage />
      )}
    </main>
  );
}
