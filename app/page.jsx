"use client"
import Link from "next/link";


async function Home() {

  async function getUsers(id) {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=20");
    const data = await response.json();
    console.log("hola", data);
    return data;
  }

  const POSTS = await getUsers();

  const filteredData = POSTS.filter(
    (dato, index, self) => self.findIndex((d) => d.postId === dato.postId) === index
  );

  console.log(filteredData);
  return (
    <div className=" container gap-3 pt-4 d-flex flex-wrap">
      {filteredData.map((post, index) => (
        <Link className="btn-info text-break" key={index} href={`foro/${post.postId}`}>
          <button style={{width:"450px",height:"200px"}}className="text-start btn  border border-black fs-3">
            <h2 className="" >Foro: {post.postId}</h2>
            <div  >
              <h3>Primer Comentario: </h3>
              <h3 className="text-decoration-underline">{post.email}</h3>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Home;
