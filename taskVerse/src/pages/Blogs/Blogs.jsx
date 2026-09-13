import React from "react";
import Blog from "../../components/Blog";
import { useState } from "react";
import './Blogs.css'

function Blogs() {

    const initialBlogs = [
        {
            id: 1,
            title: "How to Stay Organized Every Day",
            description:
                "Simple techniques to organize your tasks and keep your day focused.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            date: "Aug 18, 2026"
        },

        {
            id: 2,
            title: "The Power of Small Tasks",
            description:
                "Breaking large goals into smaller tasks can make your work easier.",
            image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
            date: "Aug 15, 2026"
        },

        {
            id: 3,
            title: "Plan Your Day With Confidence",
            description:
                "Learn how a simple daily plan can help you accomplish more.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
            date: "Aug 12, 2026"
        },

        {
            id: 4,
            title: "Build Better Productivity Habits",
            description:
                "Small consistent habits can make a big difference in your productivity.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
            date: "Aug 10, 2026"
        },

        {
            id: 5,
            title: "How to Avoid Procrastination",
            description:
                "Discover simple ways to overcome distractions and start important tasks on time.",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
            date: "Aug 7, 2026"
        },

        {
            id: 6,
            title: "Create a Productive Morning Routine",
            description:
                "A thoughtful morning routine can help you begin your day with clarity and purpose.",
            image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            date: "Aug 4, 2026"
        },

        {
            id: 7,
            title: "Managing Your Time Effectively",
            description:
                "Learn practical ways to prioritize important work and make better use of your time.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
            date: "Aug 1, 2026"
        },

        {
            id: 8,
            title: "Stay Focused While Working",
            description:
                "Simple strategies can help you reduce distractions and maintain your concentration.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
            date: "Jul 29, 2026"
        }
    ];

    const [blogs, setBlogs] = useState(initialBlogs);
    const [searchItem, setSearchItem] = useState('');
    const filterBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(searchItem.toLowerCase()) || blog.description.toLocaleLowerCase().includes(searchItem.toLowerCase()));


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