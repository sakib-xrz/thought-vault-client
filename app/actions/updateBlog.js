"use server";
import ApiRequests from "@/utilities/requests/APIRequest";
import { revalidatePath } from "next/cache";

const updateBlog = async (id, body) => {
  const { data } = await ApiRequests.blog.editBlog(id, body);

  revalidatePath("/");

  return data;
};

export default updateBlog;
