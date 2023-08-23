import { useState } from "react";
import AppContext from "./AppContext";
import { baseUrl } from "../baseUrl";
import App from "../App";
import { useNavigate } from "react-router-dom";

// This is the part of Providing the data after Creating Context

function AppContextProvider() {

    const [loading, setLoading] = useState(false); // Loading screen will be shown while Loading Blogs
    const [posts, setPosts] = useState([]); // There are array of posts which are to be displayed
    const [page, setPage] = useState(1);// page number in which I am standing that will be shown
    const [totalPages, setTotalPages] = useState(null); // total number of pages available for Blog

    const navigate = useNavigate();

    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true); // Loading screen will be shown while fetching data
        let url = `${baseUrl}?page=${page}`; 
        if (tag) {
            url += `&tag=${tag}`; // the given URL already have this tagged parameter
        }
        if (category) {
            url += `&category=${category}`; // the given URL already have this category parameter
        }

        await fetch(url)
            .then((response) =>
                response.json()
            )
            .then((data) => {
                if (!data.posts || data.posts.length === 0)
                    throw new Error("Something Went Wrong");
                setPage(data.page); 
                setPosts(data.posts);
                setTotalPages(data.totalPages);
            })
            .catch((error) => {
                console.log(error)
                alert("Error in fetching Blog Posts")
                setPage(1);
                setPosts([]);
                setTotalPages(null);
            });
        setLoading(false); // after fetching data, Loading screen will be vanished
    }

    function handlePageChanges(page) {
        navigate( { search: `?page=${page}`}); // It will search that page  where user want to go and it will move to that page
        // user only can increment or decrement the page number through clicking on `next` or `previos` button
        // It will move to that page number
        setPage(page); // set the page to that page number
    }

    const parameters = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChanges
    } // instead of using props we are sending data like this

    return (
        <AppContext.Provider value={parameters}>
            <App />
        </AppContext.Provider>
    );
}

export default AppContextProvider;