import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import TuitStatsItem from "../tuit-stats/tuit-stats-item"
import { useDispatch } from "react-redux";
import { deleteTuit } from "../../tuits/tuits-reducer";
const TuitItem = (
    {
        tuit = {}
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li class="list-group-item bg-transparent p-1">
            <div class="row">
                <div class="col-2 justify-content-start">
                    <img class="wd-img-scale-min circle-image" src={`/images/${tuit.image}`} />
                </div>
                <div class="col-10 ps-0">
                    <div class="mx-auto">
                        <span class="fw-bold">{tuit.userName}</span> <FontAwesomeIcon icon={faCheckCircle} /> <span class="text-secondary">{tuit.handle} .
                            {tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div>{tuit.tuit}</div>
                    <TuitStatsItem
                        key={tuit._id} tuit={tuit} />
                </div>
            </div>

        </li>
    );
};
export default TuitItem;