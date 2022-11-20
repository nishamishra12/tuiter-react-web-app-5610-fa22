import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faComment, faUpload, faThumbsDown } from "@fortawesome/fontawesome-free-solid";
import { updateTuitThunk }
    from "../../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStatsItem = (
    {
        tuit = {},

    }
) => {
    const dispatch = useDispatch();
    return (
        <div class="row text-secondary mt-1">
            <div class="col">
                <FontAwesomeIcon icon={faComment} /> &nbsp;
                <span>{tuit.replies}</span>
            </div>
            <div class="col">
                <FontAwesomeIcon icon={faRetweet} /> &nbsp;
                <span>{tuit.retuits}</span>
            </div>
            <div class="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
                <span>{tuit.likes}</span>
            </div>
            <div class="col">
                <FontAwesomeIcon icon={faThumbsDown} onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="text-primary"/>
                <span>{tuit.dislikes}</span>
            </div>

            <div class="col">
                <FontAwesomeIcon icon={faUpload} />
            </div>
        </div>
    );
};
export default TuitStatsItem;