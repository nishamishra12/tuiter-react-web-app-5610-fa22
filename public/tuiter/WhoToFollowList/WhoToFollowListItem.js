const WhoToFollowListItem = (who) => {
    return (`
            <li class="list-group-item">
                <div class="row align-items-center">
                    <div class="col-2">
                        <img class="circle-image wd-img-scale-min" src=${who.avatarIcon} />
                    </div>
                    <div class="col-6">
                        <span class="mx-auto fw-bold">
                            ${who.userName} <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </span><br>
                        <span>@${who.handle}</span>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
    `);
}

export default WhoToFollowListItem;