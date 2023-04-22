
import { MongoClient } from 'mongodb'
const url = process.env.dburl;
console.log("url:"+url);
const options = { useNewUrlParser: true }
let connectDB : MongoClient;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }