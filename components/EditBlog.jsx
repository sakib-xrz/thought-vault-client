import { useState } from "react";
import RightSideDrawer from "./RightSideDrawer";
import { QueryClient } from "@tanstack/react-query";

export default function EditBlog({ blog, open, setOpen }) {
  const queryClient = new QueryClient();
  const [title, setTitle] = useState(blog.title);
  const [details, setDetails] = useState(blog.details);

  const handleBlogUpdate = async (event) => {
    event.preventDefault();

    APIREQUEST.blog
      .editBlog(blog._id, { title, details })
      .then(async () => {
        await queryClient.refetchQueries({
          queryKey: ["blogs", 1],
          type: "active",
          exact: true,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleBlogUpdate} className="space-y-5">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          className="w-full border appearance-none rounded-md p-2 focus:outline-lime-500"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Details</label>
        <textarea
          name="details"
          rows="5"
          className="w-full border appearance-none rounded-md p-2 focus:outline-lime-500"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-lime-500 text-white py-2 px-4 rounded-md"
        >
          Edit Now
        </button>
      </div>
    </form>
  );
}
