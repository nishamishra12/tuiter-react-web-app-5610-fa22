const PostItem = (post) => {
    let cardText = (post.cardBody) ? `
    <div class="card-body">
    <h6 class="card-title">${post.postTitle}</h6>
    <p class="card-text text-secondary">${post.postText}</p>
    <a href="#" class="text-secondary"><i class="fa-solid fa-link"></i>${post.link}</a>
    </div>
    `: '';
    let cardImgClass = (post.cardBody)? 'card-img-top': 'card-img';
    return (`
        <li class="list-group-item bg-transparent border-0 p-0">
            <div class="row">
                <div class="col-2 justify-content-start">
                    <img class="wd-img-scale-min circle-image" src=${post.profileImage} />
                </div>
                <div class="col-10 ps-0">
                    <span class="mx-auto">
                        ${post.userName} <i class="fa fa-check-circle" aria-hidden="true"></i> <span class="text-secondary">@${post.handle} .
                        ${post.time}</span>
                        <span class="float-right">...</span>
                    </span></br>.
                    <span>${post.title}
                    </span>
                    <div class="card bg-transparent border border-secondary">
                    <img class=${cardImgClass} src=${post.image}>
                    ${cardText}
                    </div>
                    <span class="row text-secondary mt-1">
                        <span class="col">
                            <a><i class="fa-regular fa-comment pr-2"></i></a> &nbsp;
                            <span>${post.comment}</span>
                        </span>
                        <span class="col">
                            <a><i class="fa-solid fa-retweet"></i></a> &nbsp;
                            <span>${post.retweet}</span>
                        </span>
                        <span class="col">
                            <a><i class="fa-regular fa-heart"></i></a> &nbsp;
                            <span>${post.like}</span>
                        </span>
                        <span class="col">
                            <a><i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i></a>
                        </span>
                    </span>
                </div>
            </div>
        </li>
        <hr/>
    `);
}

export default PostItem;