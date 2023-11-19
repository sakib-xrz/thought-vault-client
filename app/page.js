"use client";

import { QueryClient } from "@tanstack/react-query";
import Edit from "./components/Edit";
import APIREQUEST from "./utilities/requests/APIRequest";

export default async function Home() {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["blogs"],
  //   queryFn: () => APIREQUEST.blog.getBlogs().then(({ data }) => data),
  // });
  return (
    <main>
      <Edit />
    </main>
  );
}
