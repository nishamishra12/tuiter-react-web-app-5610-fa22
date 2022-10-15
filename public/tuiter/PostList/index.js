import PostItem from "./PostItem.js ";
import posts from "./posts.js";

const PostList = () => {
    return (`
                <ul class="list-group bg-transparent border-0">
                ${posts.map(p => {
                    return (PostItem(p));
                }).join('')
            }
                </ul>
    `);
}

export default PostList;