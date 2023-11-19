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
        Edit Here
      </RightSideDrawer>
    </div>
  );
}
