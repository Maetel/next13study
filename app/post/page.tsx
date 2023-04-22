import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import DetailLink from "./DetailLink";

// export async function getData() {
//   const data = await fetch("/api/post/list");
//   console.log("data:", data);
//   return data;
// }

export default async function PostLanding(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  // const result = await getData();
  // console.log("result:", result);
  return (
    <div>
      List<br></br>
      <ul>
        {result.map((item, i) => (
          <Link href={`/post/${item._id}`} key={i}>{`${i + 1}. title:${
            item.title
          }`}</Link>
          // <DetailLink></DetailLink>
        ))}
      </ul>
    </div>
  );
}
