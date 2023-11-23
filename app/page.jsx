import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import ApiRequests from "@/utilities/requests/APIRequest";

import Banner from "./components/Banner";
import Blogs from "./components/Blogs";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await ApiRequests.blog.getBlogs();
      return data;
    },
  });

  return (
    <>
      <Banner />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Blogs />
      </HydrationBoundary>
    </>
  );
}
