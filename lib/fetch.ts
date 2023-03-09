import fetch from "node-fetch";
import { POST, TASK } from "../types/Types";

export const getAllPostsData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  const posts = (await res.json()) as unknown as POST[];
  return posts;
};

export const getAllTasksData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  );
  const tasks = (await res.json()) as unknown as TASK[];
  return tasks;
};

export const getAllPostIds = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  );
  const posts = (await res.json()) as unknown as POST[];
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = (await res.json()) as unknown as POST;
  // return {
  //   post,
  // }
  return post;
};
