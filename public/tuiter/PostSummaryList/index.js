import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
    <div class="row">
                    <div class="list-group mt-2 p-0">
                    ${posts.map(p => {
                        return (PostSummaryItem(p));
                    }).join('')
                }
                    </div>
    </div>
    `);
}

export default PostSummaryList;