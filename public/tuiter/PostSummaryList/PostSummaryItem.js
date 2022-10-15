const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item justify-content-between align-items-center">
        <div class="row">
            <div class="col-10">
                <span class="text-secondary">${post.topic}</span></br>
                <span class="mx-auto fw-bold">
                    ${post.userName} <i class="fa fa-check-circle" aria-hidden="true">
                </span></i> <span class="text-secondary"> -${post.time}</span></br>
                <span class="fw-bold">${post.title}</span>
            </div>
            <div class="col-2 justify-content-end">
                <img class="wd-img-scale-min img-fluid rounded" src=${post.image} />
            </div> <br/>
            <span class="text-secondary">${post.tweets}</span>
        </div>
    </li>
    `);

}

export default PostSummaryItem;