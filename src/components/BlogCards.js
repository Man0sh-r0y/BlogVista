import { useContext } from "react";
import AppContext from "../context/AppContext";
import BlogCard from "./BlogCard";

function BlogCards() {

    const {posts} = useContext(AppContext);

    if (posts.length === 0){// If Post length is zero, It will show "No Blogs Found !"
        return (
            <div className="no-blog-found">
                <p> No Blogs Found ! </p>
            </div>
        );
    }

    return (
        <div className="blog-posts">
            {
                posts.map((post) => (
                    <BlogCard key={post.id} blogPost={post} />
                ))
                /* It is mapping over the `posts` array and creating a new array of `BlogCard` components.  */
            }
        </div>
    );
}

export default BlogCards;