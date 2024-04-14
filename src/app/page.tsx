import { getPosts } from "./actions";
import { Posts } from "./components/posts";

export default async function HomePage() {
  const posts = await getPosts({ page: 1 });

  return (
    <main className="flex flex-col gap-y-4">
      <h1 className="text-4xl font-bold text-center">JSON Placeholder Posts</h1>
      <Posts initialPosts={posts} />
    </main>
  );
}
