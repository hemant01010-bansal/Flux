import React from "react";
import "./Blog.css";

function Blog({ blogs }) {
    return (
            
            <div className="blogContainer">
                {blogs.map((blog) => (
                    <article className="blogCard" key={blog.id}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="blogImage"
                        />
                        <div className="blogContent">
                            <p className="blogCategory">
                                {blog.category}
                            </p>
                            <h2>{blog.title}</h2>
                            <p className="blogDescription">
                                {blog.description}
                            </p>
                            <div className="blogFooter">
                                <span>
                                    {blog.date}
                                </span>
                                <button>
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </article>
                ))}

            </div>

    );
}

export default Blog;