const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_MONGO_URI;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect(); // Ensure the client is connected
    db = client.db("next-hero"); // Corrected the method call
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error); // Improved error logging
  }
};

export default connectDB;
