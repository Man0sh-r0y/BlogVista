import { useContext } from "react";
import AppContext from "../context/AppContext";

function PageNumber(){

    const {page, handlePageChanges, totalPages} = useContext(AppContext);

    return (
        <div className="page-number-area">
            <div className="btn-box-page-num">

                <div className="btn-div">
                    {
                        page > 1 && 
                        <button onClick={() => handlePageChanges(page - 1)}>
                            Previous
                        </button>
                        /* If page is greater than 1 then only show `previos` button. This button will move back to previos page */
                    }

                    {
                        page < totalPages &&
                        <button onClick={() => handlePageChanges(page + 1)}>
                            Next
                        </button>
                        /* If page is less than total pages then only show `next` button. This button will move forward to next page */
                    }
                </div>

                <p>
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default PageNumber;