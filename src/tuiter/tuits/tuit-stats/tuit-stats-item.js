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
            {/* <div class="col-2 justify-content-start">
                <img class="wd-img-scale-min circle-image" src={`/images/${tuit.image}`} />
            </div>
            <div class="col-10 ps-0">
                <div class="mx-auto">
                    <span class="fw-bold">{tuit.userName}</span> <FontAwesomeIcon icon={faCheckCircle} /> <span class="text-secondary">{tuit.handle} .
                        {tuit.time}</span>
                </div>
                <div>{tuit.tuit}</div>
            </div> */}
        </div>
    );
};
export default TuitStatsItem;