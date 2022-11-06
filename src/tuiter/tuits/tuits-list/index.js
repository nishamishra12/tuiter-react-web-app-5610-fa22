import React from "react";
// import postsArray from './posts.json';
import TuitItem
    from "./tuit-item.js";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit} />)
            }
        </ul>
    );
};
export default TuitsList;