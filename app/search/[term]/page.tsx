import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API for seacrch movies
  // API for popular movies
  return <div>Welcome to page {termToUse} </div>;
}

export default SearchPage;
