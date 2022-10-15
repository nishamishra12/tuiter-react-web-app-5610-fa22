import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
            <div class="col-11 rounded-pill border bg-white">
                <span>
                    <i class="fas fa-search"></i>
                </span>
                <input type="search" class="rounded border-0 bg-white" placeholder="Search Tuiter" aria-label="Search" />
            </div>
            <div class="col-1">
                <div class="float-right">
                    <i class="fa fa-cog text-primary fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div class="row mt-2">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-md-block d-sm-none">
                    <a class="nav-link " href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>

        <div class="row mt-2">
            <div class="card p-0 rounded-0 border-0">
                <img class="card-img rounded-0" src="img/spacex.jpg" />
                <div class="card-img-overlay d-flex align-items-end">
                    <h2 class="card-text text-white fw-bold text-large">Spacex's Starship</h2>
                </div>
            </div>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
