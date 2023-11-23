"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ApiRequests from "@/utilities/requests/APIRequest";

import BlogCard from "@/components/Cards/BlogCard";
import RightSideDrawer from "@/components/RightSideDrawer";
import EditBlog from "@/components/EditBlog";

export default function Blogs() {
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { data, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      // The data is pre-fetched on the server
      const { data } = await ApiRequests.blog.getBlogs();
      return data;
    },
  });

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
    setOpenEditDrawer(true);
  };

  return (
    <>
      <div className="px-8 my-6">
        <h2 className="text-2xl font-semibold text-gray-600 text-center mb-6">
          Popular Blogs
        </h2>

        <div className="flex items-center gap-3 flex-wrap">
          {data.data.blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onEditBlog={handleEditBlog} />
          ))}
        </div>
      </div>

      <RightSideDrawer
        open={openEditDrawer}
        setOpen={setOpenEditDrawer}
        title="Edit Blog"
      >
        <EditBlog blog={selectedBlog} refetch={refetch} />
      </RightSideDrawer>
    </>
  );
}
