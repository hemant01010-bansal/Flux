import React from "react";
import Blog from "../../components/Blog";
import { useState } from "react";
import './Blogs.css'

function Blogs() {

    const initialBlogs = [
        {
            id: 1,
            title: "How to Stay Organized Every Day",
            category: "Productivity",
            description:
                "Simple techniques to organize your tasks and keep your day focused.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            date: "Aug 18, 2026"
        },

        {
            id: 2,
            title: "The Power of Small Tasks",
            category: "Focus",
            description:
                "Breaking large goals into smaller tasks can make your work easier.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
            date: "Aug 15, 2026"
        },

        {
            id: 3,
            title: "Plan Your Day With Confidence",
            category: "Planning",
            description:
                "Learn how a simple daily plan can help you accomplish more.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            date: "Aug 12, 2026"
        },

        {
            id: 4,
            title: "Build Better Productivity Habits",
            category: "Habits",
            description:
                "Small consistent habits can make a big difference in your productivity.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
            date: "Aug 10, 2026"
        },
        {
            id: 5,
            title: "How to Stay Organized Every Day",
            category: "Productivity",
            description:
                "Simple techniques to organize your tasks and keep your day focused.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            date: "Aug 18, 2026"
        },

        {
            id: 6,
            title: "The Power of Small Tasks",
            category: "Focus",
            description:
                "Breaking large goals into smaller tasks can make your work easier.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
            date: "Aug 15, 2026"
        },

        {
            id: 7,
            title: "Plan Your Day With Confidence",
            category: "Planning",
            description:
                "Learn how a simple daily plan can help you accomplish more.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            date: "Aug 12, 2026"
        },

        {
            id: 8,
            title: "Build Better Productivity Habits",
            category: "Habits",
            description:
                "Small consistent habits can make a big difference in your productivity.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
            date: "Aug 10, 2026"
        }
    ];

    const [blogs, setBlogs] = useState(initialBlogs);
    const [searchItem, setSearchItem] = useState('');
    const filterBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchItem.toLowerCase()))


    return (
        <>
            <div className="blogHeader">
                <p className="blogTag">FROM THE FLUX BLOG</p>
                <h1>Ideas to help you<br />stay focused.</h1>
                <p className="blogDescription">
                    Practical tips, ideas, and insights to help you
                    organize your work and make the most of your time.
                </p>
            </div>

            <div className="search">
                <input placeholder="Search Blog" value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />
            </div>
            <div className="noOfBlogs">
                <p>No. of Blogs : {filterBlogs.length}</p>
            </div>
            <div style={{ fontSize: "28px", display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }}>
                {filterBlogs.length == 0 ? "😕 Oops! We couldn't find any blogs matching your search." : ""}
            </div>
            <Blog blogs={filterBlogs} />
        </>
    )
}

export default Blogs;