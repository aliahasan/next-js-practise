import connectDB from "@/lib/connectDB";

export const POST = async (req) => {
  try {
    const db = await connectDB();
    const usersCollection = db.collection("users");
    const newUser = await req.json();
    const res = await usersCollection.insertOne(newUser);
    return Response.json({
      message: "new user added successfully",
      res,
    });
  } catch (error) {
    return Response.json({
      message: "Something went wrong",
    });
  }
};
