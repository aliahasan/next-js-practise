// Fetch all posts with
export const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    if (!res.ok) {
      throw new Error(
        `Error fetching posts: ${res.status} - ${res.statusText}`
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in getPosts:", error);
    return { error: "Failed to fetch posts" };
  }
};

// Fetch a single post by ID with
export const getSinglePost = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    if (!res.ok) {
      throw new Error(
        `Error fetching post with id ${id}: ${res.status} - ${res.statusText}`
      );
    }
    const post = await res.json();
    return post;
  } catch (error) {
    console.error("Error in getSinglePost:", error);
    return { error: "Failed to fetch posts" };
  }
};
