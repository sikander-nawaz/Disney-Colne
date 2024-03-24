// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Genres } from "@/typings";
// import { ChevronDown } from "lucide-react";
// import Link from "next/link";

// async function GenreDropdown() {
//   const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
//   const options: RequestInit = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
//     },
//     next: {
//       revalidate: 60 * 60 * 24, // 24 hours
//     },
//   };

//   const response = await fetch(url.toString(), options);
//   const data = (await response.json()) as Genres;

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger className="text-white flex justify-center items-center">
//         Genre <ChevronDown className="ml-1" />
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>
//         <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
//         <DropdownMenuSeparator />

//         {data.genres.map((genre) => (
//           <DropdownMenuItem className="cursor-pointer" key={genre.id}>
//             <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
//               {genre.name}
//             </Link>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// export default GenreDropdown;
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genres } from "@/typings";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface GenreDropdownProps {}

// Use a functional component and state for loading
const GenreDropdown: React.FC<GenreDropdownProps> = ({}) => {
  const [data, setData] = useState<Genres | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data asynchronously
    async function fetchGenres() {
      try {
        const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
        const options: RequestInit = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
          },
          next: {
            revalidate: 60 * 60 * 24, // 24 hours
          },
        };

        const response = await fetch(url.toString(), options);
        const fetchedData = (await response.json()) as Genres;
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGenres();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {isLoading ? (
          <p>Loading genres...</p>
        ) : error ? (
          <p>Error fetching genres: {error}</p>
        ) : (
          <>
            <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data?.genres?.map((genre) => (
              <DropdownMenuItem className="cursor-pointer" key={genre.id}>
                <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                  {genre.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
