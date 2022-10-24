import React from "react";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faComment, faUpload, faCheckCircle } from "@fortawesome/fontawesome-free-solid";
const PostSummaryItem = (
    {
        post = {
            "handle": "elonmusk",
            "userName": "ReactJS",
            "time": "23h",
            "title": "Amazing show about <a href='#.html'>@Inspiration4x</a> mission!",
            "image": "../HomeScreen/img/inspiration4x.jpg",
            "postTitle": "Countdown: Inspiration 4 mission to space | Netflix Official Site",
            "postText": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space ...",
            "link": "netflix.com",
            "comment": "4.2K",
            "retweet": "3.5K",
            "like": "37.5K",
            "profileImage": "../HomeScreen/img/falcon9.jpg",
            "cardBody": true
        }
    }
) => {
    let cardText = (post.cardBody) ?
        <div class="card-body">
            <h6 class="card-title">{post.postTitle}</h6>
            <p class="card-text text-secondary">{post.postText}</p>
            <a href="#" class="text-secondary"><i class="fa-solid fa-link"></i>{post.link}</a>
        </div>
        : '';
    let cardImgClass = (post.cardBody) ? 'card-img-top' : 'card-img';

    return (
        <li class="list-group-item bg-transparent p-1">
            <div class="row">
                <div class="col-2 justify-content-start">
                    <img class="wd-img-scale-min circle-image" src={`/images/${post.profileImage}`} />
                </div>
                <div class="col-10 ps-0">
                    <div class="mx-auto">
                        <span class="fw-bold">{post.userName}</span> <FontAwesomeIcon icon={faCheckCircle}/> <span class="text-secondary">@{post.handle} .
                            {post.time}</span>
                        <span class="float-right">...</span>
                    </div>
                    <div>{post.title}<a href="#html">{post.titleLink}</a></div>
                    <div class="card bg-transparent border border-secondary">
                        <img class={`${cardImgClass}`} src={`/images/${post.image}`} />
                        {cardText}
                    </div>
                    <span class="row text-secondary mt-1">
                        <span class="col">
                        <FontAwesomeIcon icon={faComment} /> &nbsp;
                            <span>{post.comment}</span>
                        </span>
                        <span class="col">
                        <FontAwesomeIcon icon={faRetweet} /> &nbsp;
                            <span>{post.retweet}</span>
                        </span>
                        <span class="col">
                        <FontAwesomeIcon icon={faHeart} /> &nbsp;
                            <span>{post.like}</span>
                        </span>
                        <span class="col">
                        <FontAwesomeIcon icon={faUpload} />
                        </span>
                    </span>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;