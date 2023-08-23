import React from "react";
import { useContext, useEffect } from "react"
import AppContext from "./context/AppContext"
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage"
import TagPage from "./Pages/TagPage"
import CategoryPage from "./Pages/CategoryPage"


function App() {

  const {fetchBlogPosts} =  useContext(AppContext); // `useContext(AppContext)` is a React hook that allows you to access the value of the AppContext.

  const [searchParams] = useSearchParams(); // useSearchParams Hook
  const location = useLocation(); // useLocation Hook

  useEffect(() => {

    const page = searchParams.get("page") ?? 1;
    // to retrieve the value of the "page" parameter from the URL query string
    // If it doesn't get the "page" parameter value then it will be 1

    if(location.pathname.includes("tags")) { // It is checking if the current URL path includes the string "tags"
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      // extracting the last part of the current URL path and convert it into a readable format.
      // At first split the path by "/"
      // Then get the last part of the path
      // Then replace all "-" with " "
      // Finally replace the last part of the path with the readable format
      // That's how we got `tag` value
      // suppose it was "#software-engineering", after replacing "-", it would be "#software engineering"
      fetchBlogPosts( Number(page), tag); 
      // `Number(page)` is converting the value of the `page` parameter from a string to a number.
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      // extracting the last part of the current URL path and convert it into a readable format.
      fetchBlogPosts(Number(page), null, category);
      // `Number(page)` is converting the value of the `page` parameter from a string to a number.
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]); // when location.search and location.pathname will be changed these codes will be executed
  // `location.search` is a property of the `location` object provided by the `useLocation` hook.
  // It returns the query string portion of the current URL.

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPage />} /> {/* `/blog/:id` is a route path in the React Router. It is used to match the URL pattern for individual blog posts. */}
        <Route path="/tags/:tag" element={<TagPage />} /> {/* `/tags/:tag` is a route path in the React Router. It is used to match the URL pattern for displaying blog posts with a specific tag. */}
        <Route path="/categories/:category" element={<CategoryPage />} /> {/* `/categories/:category` is a route path in the React Router. It is used to match the URL pattern for displaying blog posts with a specific category. */}
      </Routes>
  );
}

export default App;
