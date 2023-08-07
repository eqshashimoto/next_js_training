import Link from "next/link";
// import fetch from "isomorphic-unfetch";

const shows = {
    "id": 1,
  "name": "batman",
}


// const Index = props => (
//   <div>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {shows.map(show => (
//         <li key={show.id}>{show.name}</li>
//       ))}
//     </ul>
//   </div>
// );


// const Index = props => (
//   <div>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/shows/[id]" as={`/shows/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

const Index = () => {
  return <h1>Hello World</h1>;
};
export default Index;


Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return { shows: data.map(entry => entry.show) };
};

console.log(Index.getInitialProps);

// export default Index;

