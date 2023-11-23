import Link from "next/link";

export default function BlogCard({ blog, onEditBlog }) {
  return (
    <div className="border rounded-md bg-slate-100 p-4">
      <div className="space-y-1">
        <h4>{blog.title}</h4>
        <p>{blog.details}</p>
      </div>

      <div className="flex justify-end items-center gap-2 mt-2">
        <Link
          className="bg-green-400 text-gray-600 px-3 py-2 text-center"
          href={`/blogs/123`}
        >
          Details
        </Link>
        <button
          onClick={onEditBlog.bind(null, blog)}
          className="bg-green-400 text-gray-600 px-3 py-2 text-center"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
