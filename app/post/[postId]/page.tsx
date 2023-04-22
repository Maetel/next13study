import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function PostDetail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.postId) });
  return (
    <div>
      {result.title}
      <br></br>
      {result.content}
      <br></br>
      <Link href={`/post/${props.params.postId}/edit`}>수정하기</Link>
    </div>
  );
}
