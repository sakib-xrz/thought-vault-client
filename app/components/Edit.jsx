"use client";

import { PencilSquareIcon } from "@heroicons/react/24/outline";
import RightSideDrawer from "./RightSideDrawer";
import { useState } from "react";

export default function Edit() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <PencilSquareIcon
        className="w-7 h-7 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      <RightSideDrawer title={"Edit Blog"} open={open} setOpen={setOpen}>
        <form className="space-y-5">
          <div>
            <label for="title">Title</label>
            <input
              id="title"
              name="title"
              className="w-full border appearance-none rounded-md p-2 focus:outline-lime-500"
            />
          </div>
          <div>
            <label for="title">Details</label>
            <textarea
              name="details"
              rows="5"
              className="w-full border appearance-none rounded-md p-2 focus:outline-lime-500"
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
      </RightSideDrawer>
    </div>
  );
}
