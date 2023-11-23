import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import ApiRequests from "@/utilities/requests/APIRequest";

export default function EditBlog({ blog, refetch }) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState(blog.title);
  const [details, setDetails] = useState(blog.details);

  const handleBlogUpdate = (event) => {
    event.preventDefault();

    ApiRequests.blog
      .editBlog(blog._id, { title, blog })
      .then(({ data }) => {
        queryClient.refetchQueries(["blogs"]);
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
          Save
        </button>
      </div>
    </form>
  );
}
