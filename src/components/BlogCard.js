import { NavLink } from "react-router-dom";

function BlogCard(props) {

    const post = props.blogPost;

    return (
        <div className="blog-card">

                <NavLink to={`/blog/${post.id}`}>
                    <span className="post-title">
                        {post.title}
                    </span>
                </NavLink>

                <p className="post-author">
                    By <span> {post.author} </span> on
                    <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                        <span> {post.category} </span>
                    </NavLink>
                </p>

                <p className="post-date">
                    Posted on {post.date}
                </p>

                <p className="post-content">
                    {post.content}
                </p>

                <div className="post-tags">
                    {
                        post.tags.map((tag, index) => (
                            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                                <span key={index} className="tag">
                                    {`#${tag}`}
                                </span>
                            </NavLink>
                        ))
                        /* It is mapping over the `post.tags` array */
                    }
                </div>
        </div>
    );
}

export default BlogCard;