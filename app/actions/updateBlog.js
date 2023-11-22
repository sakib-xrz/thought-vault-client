"use server";
import { revalidatePath } from "next/cache";
import APIREQUEST from "../utilities/requests/APIRequest";

const updateBlog = async (id, body) => {
  const { data } = await APIREQUEST.blog.editBlog(id, body);

  revalidatePath("/");

  return data;
};

export default updateBlog;
