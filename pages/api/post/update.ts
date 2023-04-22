import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if(req.method==='POST'){
    const {title, content} = req.body;
    if(!title || title.length===0){
      return res.status(500).json("제목을 안썼네");
    }
    try {
      const {postId} = req.query;
      const client = await connectDB;
    const db = client.db("forum");
    const filter = {_id: new ObjectId(postId)};
    const result = await db.collection("post").updateOne(filter,{$set:req.body});
    return res.status(200).redirect('/post');
    } catch (e){
      return res.status(400).redirect('/');
    }
    
  }
  return res.status(404);
}