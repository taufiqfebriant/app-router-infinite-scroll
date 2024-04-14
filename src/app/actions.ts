"use server";

import ky from "ky";
import { type Post } from "./types";

type GetPostsParams = {
  page: number;
};

export async function getPosts(params: GetPostsParams) {
  return ky
    .get(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL}/posts`, {
      searchParams: {
        _page: params.page,
      },
    })
    .json<Post[]>();
}
