import client from "./HTTPchain";

const APIREQUEST = {
  blog: {
    getBlogs: () => {
      const endpoint = "/blogs";
      return client.get(endpoint);
    },
    getBlog: (id) => {
      const endpoint = `/blogs/${id}`;
      return client.get(endpoint);
    },
    editBlog: (id, payload) => {
      const endpoint = `/blogs/${id}`;
      return client.patch(endpoint, payload);
    },
    deleteBlog: (id) => {
      const endpoint = `/blogs/${id}`;
      return client.delete(endpoint);
    },
  },
};

export default APIREQUEST;
