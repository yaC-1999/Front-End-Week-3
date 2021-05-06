import React from "react";



const PublisherDetail = (props) => {
    return (
        <div>
            <div class="meta">
                <span class="date">
                    <div className = " published ">{props.published}</div>
                    <div className = "time ">{props.time}</div>
                </span>
            </div>

        </div>
    );
};


export default PublisherDetail;