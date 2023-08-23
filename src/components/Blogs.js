import { useContext } from "react";
import AppContext from "../context/AppContext";
import BlogCards from "./BlogCards";
import Spinner from "./Spinner";

function Blogs(){

    const {loading} = useContext(AppContext);

    return(
        <div className="blog">
            {
                loading ? (<Spinner/>) : (<BlogCards/>)
                /* If Loading is true then show the Spinner, Otherwise show the BlogCards */
            }
        </div>
    );
}

export default Blogs;