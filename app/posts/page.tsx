import { revalidatePath } from "next/cache";
import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"
import styles from "./postPage.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"

// interface posts
interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async() => {
  const response = await fetch(base_url, {
    next: {revalidate:3600}
  })
  const posts: Iposts[] = await response.json()
  return (
    <div className={styles.bgRed}>
      <h1>fetch data</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>Post Page</h1>
      {posts.map((post) => {
        return(
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            {/* client componenet */}
            <ViewUserButton userId={post.userId}/>
          </CardList>
        )
      })}
    </div>
  )
}

export default Post