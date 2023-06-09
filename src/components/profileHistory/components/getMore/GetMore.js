// import { useEffect, useState } from "react";
// import Posts from "./Posts";

// export default function GetMore() {
//   const [moreInfo, getMoreInfo] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then(data => getMoreInfo(data));
//   }, []);
//   console.log(response.data);

//   return (
//     <div>
//       {moreInfo.slice(0, 10).map((post) => (
//         <Posts post={post} />
//       ))}
//     </div>
//   );
// }
