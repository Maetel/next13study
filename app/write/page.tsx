import React from "react";

function WriteLanding() {
  return (
    <div>
      <h4>새 글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="글 제목"></input>
        <input name="content" placeholder="글 내용"></input>
        <button type="submit">작성</button>
      </form>
    </div>
  );
}

export default WriteLanding;
