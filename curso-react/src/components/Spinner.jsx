import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;