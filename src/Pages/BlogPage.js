import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import {newBaseUrl} from "../baseUrl";
import Spinner from "../components/Spinner";

function Blogpage() {

    const [blog, setBlog] = useState(null); // initially Blog is null. When We will click on a Blog title then This Blog will be shown
    const [relatedblogs, setRelatedBlogs] = useState([]); // initially related blog is null. After clicking a Blog title, related blogs of that clicked blogs will be shown
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
    /* `location.pathname.split("/").at(-1)` is splitting the `location.pathname` string
    by "/" and returning an array of substrings. The `.at(-1)` method is then used to
    access the last element of the array, which in this case is the blogId. It is
    extracting the blogId from the current URL path. */

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`; // new URL for the Blog page (When we click over a blog title)

        await fetch(url)
            .then((response) => (
                response.json()
            ))
            .then((data) => {
                setBlog(data.blog);
                setRelatedBlogs(data.relatedBlogs);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to fetch related blog");
                setBlog(null);
                setRelatedBlogs([]);
            })
            setLoading(false);
    }

    useEffect(() => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    function showBlogDetails() {
        return (
            <div>
                {
                    blog ? 
                        (<div className="show-related-blog">
                            <BlogCard blogPost={blog}/>
                            <h2> Related Blogs </h2>
                            {
                                relatedblogs.map((relatedblog) => (
                                    <div key={relatedblog.id}>
                                        <BlogCard blogPost={relatedblog}/>
                                    </div>
                                ))
                                /* Mapping over a Related Blogs Array */
                            }
                        </div>) :
                        (<div className="no-blog-found">
                            <p> No Blog Found </p>
                        </div>)
                }
            </div>
        );
    }

    return (
        <div className="blog-page">
            <Header />
            <div className="blog-page-div">
                <div className="testing-div-1">
                    <button onClick={() => navigation(-1)}>
                        Back
                    </button>

                    <div className="testing-div-2">
                        {
                            loading ? <Spinner /> : showBlogDetails()
                            /* If Loading is true then show the spinner, Otherwise show the Blog Details */
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogpage;