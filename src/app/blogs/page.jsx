import { getPosts } from "@/api/api";
import Link from "next/link";

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Page</h1>
        <div className="space-y-6 ">
          {posts?.slice(0, 20).map((blog) => (
            <div
              key={blog.id} // Unique key for each post
              className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700">{blog.body}</p> 
              <Link href={`/blogs/${blog.id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  View details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
