import { dehydrate, Hydrate } from "@tanstack/react-query";

import ApiRequests from "@/utilities/requests/APIRequest";
import getQueryClient from "@/getQueryClient";

import Banner from "./components/Banner";
import Blogs from "./components/Blogs";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["blogs"], async () => {
    const { data } = await ApiRequests.blog.getBlogs();
    return data;
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Banner />

      <Hydrate state={dehydratedState}>
        <Blogs />
      </Hydrate>
    </>
  );
}
