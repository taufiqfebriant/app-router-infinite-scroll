"use client";

import { useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import { getPosts } from "../actions";
import { type Post } from "../types";
import { Spinner } from "./spinner";

type PostsProps = {
  initialPosts: Post[];
};

export function Posts(props: PostsProps) {
  const [posts, setPosts] = useState(props.initialPosts);
  const [page, setPage] = useState(2);
  const [isPending, startTransition] = useTransition();

  async function getNextPosts(inView: boolean) {
    if (inView) {
      const nextPosts = await getPosts({ page });

      setPosts((prev) => [...prev, ...nextPosts]);
      setPage((prev) => prev + 1);
    }
  }

  const inView = useInView({
    onChange(inView) {
      startTransition(() => getNextPosts(inView));
    },
  });

  return (
    <>
      <div className="flex flex-col divide-y">
        {posts.map((post) => (
          <article key={post.id} className="h-16 flex items-center">
            <h2 className="text-lg">{post.title}</h2>
          </article>
        ))}
      </div>

      {page <= 10 ? (
        <div ref={inView.ref} className="flex justify-center">
          {isPending ? <Spinner /> : null}
        </div>
      ) : null}
    </>
  );
}
