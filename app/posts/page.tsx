import { revalidatePath } from "next/cache";
import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"
import styles from "./postPage.module.css"
import { table } from "console";

const base_url = "https://jsonplaceholder.typicode.com/posts"

// interface posts
interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async () => {
  const response = await fetch(base_url, {
    next: { revalidate: 3600 }
  })
  const posts: Iposts[] = await response.json()
  return (
    <div className={styles.bgGrey}>
      <div className="bg-[white]">
        <h1>fetching data</h1>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      <h1>Post Page</h1>
      <CardList>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-black">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Body</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border p-2 text-center">{post.id}</td>
              <td className="border">
                  <p className="font-bold">{post.title}</p>
              </td>
              <td className="border p-2">{post.body}</td>
              <td className="border p-2"><ViewUserButton userId={post.userId} /> </td>
            </tr>
          ))}
        </tbody>
      </table>
      </CardList>


    </div>
  )
}

export default Post