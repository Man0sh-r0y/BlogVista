import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PageNumber from "../components/PageNumber";
import Blogs from "../components/Blogs";

function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    /* `location.pathname.split("/").at(-1)` is splitting the `pathname` property of the
    `location` object into an array of substrings using the "/" delimiter. Then, it is
    accessing the last element of the array using the `at()` method with the index -1. */

    return(
        <div className="tag-page">
            <Header />

            <div className="tag-page-div">
                <div className="tag-page-head">
                    <button onClick={() => navigation(-1)}>
                        Back
                    </button>
                    <h2>
                        Blogs Tagged <span> #{tag} </span>
                    </h2>
                </div>

                <div className="show-blog-category-tag">
                    <Blogs />
                </div>
                
            </div>

            <PageNumber />
        </div>
    );
}

export default TagPage;