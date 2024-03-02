let blogs = [
  {
    date: new Date("2024-03-02"),
    title: "Welcome to my blog",
    content: "Welcome to my new blog",
  },
  {
    date: new Date("2024-01-01").toString(),
    title: "Happy new year",
    content: "Happy new year 2024 everybody!",
  },
];

const blog_id = document.getElementById("blogpost");

blogs.forEach((blog) => {
  let li_el = document.createElement("li");
  let h2_el = document.createElement("h2");

  let title_node = document.createTextNode(blog.title);
  let content_node = document.createTextNode(blog.content);
  let date_node = document.createTextNode(blog.date);

  h2_el.appendChild(title_node);
  li_el.appendChild(h2_el);
  li_el.appendChild(document.createElement("hr"));
  li_el.appendChild(content_node);
  li_el.appendChild(document.createElement("hr"));
  li_el.appendChild(date_node);

  blog_id.appendChild(li_el);
});
