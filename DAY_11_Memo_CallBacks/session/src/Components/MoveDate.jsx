import React from "react";

export function Movie({ title, releaseDate, memo }) {
  console.log(`${memo ? "MemoizedMovie" : "Movie"} rendered`);

  return (
    <div>
      <h1>Movie title: {title}</h1>
      <h2>Release date: {releaseDate}</h2>
    </div>
  );
}

export const MemoizedMovie = React.memo(Movie, function areEqual(prev, curr) {
  return prev.title && prev.releaseDate === curr.title && curr.releaseDate;
});
