import { getSinglePost } from "@/api/api";
import Link from "next/link";

// Dynamic metadata generation
export const generateMetadata = async ({ params }) => {
  const { id } = params || {};

  // Fetch the post details based on the ID to generate dynamic metadata
  const post = await getSinglePost(id);
  const { body } = post;

  return {
    title: `Post Details  ${id}`,
    description: `Read the post: ${body.slice(0, 150)}...`,
    keywords: `${body.slice(0,150)}`,
  };
};

const PostDetails = async ({ params }) => {
  const { id } = params || {};

  // Fetch the post details
  const post = await getSinglePost(id);

  if (!post) {
    return <p>No blog found</p>;
  }

  const { userId, body } = post;

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Post ID: {id}</h2>
        <div className="text-sm text-gray-500 mb-6">
          <p>User ID: {userId}</p>
          <p>Post Content: {body}</p>
        </div>
        {/* Back to blogs list */}
        <Link href="/blogs">
          <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Back to Blogs
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
