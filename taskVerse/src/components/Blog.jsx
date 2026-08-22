import React from "react";
import "./Blog.css";

function Blog({ blogs }) {
    return (
        <section className="blogSection">
            <div className="blogHeader">
                <p className="blogTag">FROM THE FLUX BLOG</p>
                <h1>Ideas to help you<br />stay focused.</h1>
                <p className="blogDescription">
                    Practical tips, ideas, and insights to help you
                    organize your work and make the most of your time.
                </p>
            </div>

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

        </section>
    );
}

export default Blog;