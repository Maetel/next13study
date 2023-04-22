import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

async function WriteLanding(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.postId) });
  return (
    <div>
      <h4>글 수정</h4>
      <form
        action={`/api/post/update?postId=${props.params.postId}`}
        method="POST"
      >
        <input
          defaultValue={result.title}
          name="title"
          placeholder="글 제목"
        ></input>
        <input
          defaultValue={result.content}
          name="content"
          placeholder="글 내용"
        ></input>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}

export default WriteLanding;
