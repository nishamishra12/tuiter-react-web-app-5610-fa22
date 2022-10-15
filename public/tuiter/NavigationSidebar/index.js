const NavigationSidebar = (active) => {
    return (`
                <div class="d-xxl-block d-xl-block d-none d-lg-none d-md-none d-sm-none">
                    <ul class="list-group">
                        <a class="list-group-item" href="../home.html"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                        <a class="list-group-item  ${active === 'home' ? 'active' : ''}" href="../HomeScreen/index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                        <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../explore/index.html"><i class="fa fa-hashtag" aria-hidden="true"></i>
                            Explore</a>
                        <a class="list-group-item ${active === 'notification' ? 'active' : ''}" href="notification.html"><i class="fa fa-bell" aria-hidden="true"></i>
                            Notifications</a>
                        <a class="list-group-item ${active === 'messages' ? 'active' : ''}" href="../message.html"><i class="fa fa-envelope" aria-hidden="true"></i>
                            Messages</a>
                        <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}" href="../bookmarks/index.html"><i class="fa fa-bookmark" aria-hidden="true"></i>
                            Bookmarks</a>
                        <a class="list-group-item ${active === 'lists' ? 'active' : ''}" href="list.html"><i class="fa fa-list" aria-hidden="true"></i>
                            Lists</a>
                        <a class="list-group-item ${active === 'profile' ? 'active' : ''}" href="../profile.html"><i class="fa fa-user" aria-hidden="true"></i>
                            Profile</a>
                        <a class="list-group-item ${active === 'more' ? 'active' : ''}" href="#.html">
                            <span class="fa-stack stacked-icon">
                                <i class="fas fa-circle fa-stack-1x text-white"></i>
                                <i class="fa fa-ellipsis-h fa-stack-1x small fa-inverse text-black"></i>
                            </span> More
                        </a>
                    </ul>
                </div>

            <!-- for less than xl screen -->
                <div class="d-sm-block d-md-block d-lg-block d-none d-xxl-none d-xl-none">
                    <ul class="list-group">
                        <a class="list-group-item" href="../home.html"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../home.html"><i class="fa fa-home" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="index.html"><i class="fa fa-hashtag" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'notification' ? 'active' : ''}"  href="notification.html"><i class="fa fa-bell" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'messages' ? 'active' : ''}" href="../message.html"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'bookmarks' ? 'active' : ''}" href="../bookmarks/index.html"><i class="fa fa-bookmark" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'lists' ? 'active' : ''}" href="../profile.html"><i class="fa fa-list" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'profile' ? 'active' : ''}" href="#.html"><i class="fa fa-user" aria-hidden="true"></i></a>
                        <a class="list-group-item ${active === 'more' ? 'active' : ''}"  href="#.html">
                            <span class="fa-stack stacked-icon">
                                <i class="fas fa-circle fa-stack-1x text-white"></i>
                                <i class="fa fa-ellipsis-h fa-stack-1x small fa-inverse text-black"></i>
                            </span>
                        </a>
                    </ul>
                </div>
                <div class="d-grid mt-2">
                    <button type="submit" class="btn btn-primary rounded-pill">Tuit</button>
                </div>
    `);
}

export default NavigationSidebar;