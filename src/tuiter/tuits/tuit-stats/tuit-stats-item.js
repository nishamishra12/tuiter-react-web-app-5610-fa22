import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faComment, faUpload, faCheckCircle } from "@fortawesome/fontawesome-free-solid";
const TuitStatsItem = (
    {
        tuit = {}
    }
) => {
    return (
        <div class="row text-secondary mt-1">
                        <div class="col-3">
                        <FontAwesomeIcon icon={faComment} /> &nbsp;
                            <span>{tuit.replies}</span>
                        </div>
                        <div class="col-3">
                        <FontAwesomeIcon icon={faRetweet} /> &nbsp;
                            <span>{tuit.retuits}</span>
                        </div>
                        <div class="col-3">
                        <FontAwesomeIcon icon={faHeart} /> &nbsp;
                            <span>{tuit.likes}</span>
                        </div>
                        <div class="col-3">
                        <FontAwesomeIcon icon={faUpload} />
                        </div>
        </div>
    );
};
export default TuitStatsItem;