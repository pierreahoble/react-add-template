import { Component } from "react";



class Menu extends Component{
    render( ){
        return (
            <div>
                 <div className="navbar-custom">
                            <ul className="list-unstyled topbar-menu float-end mb-0">
                                <li className="dropdown notification-list d-lg-none">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-search noti-icon"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                        <form className="p-3">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        </form>
                                    </div>
                                </li>
                                <li className="dropdown notification-list topbar-dropdown">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height="12"/> 
                                        <span className="align-middle d-none d-sm-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Italian</span>
                                        </a>
                    
                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                                        </a>

                                    </div>
                                </li>

                                <li className="dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-bell noti-icon"></i>
                                        <span className="noti-icon-badge"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">

                                    
                                        <div className="dropdown-item noti-title">
                                            <h5 className="m-0">
                                                <span className="float-end">
                                                    <a href="javascript: void(0);" className="text-dark">
                                                        <small>Clear All</small>
                                                    </a>
                                                </span>Notification
                                            </h5>
                                        </div>

                                        <div style={{maxHeight: 230}} data-simplebar>
                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">1 min ago</small>
                                                </p>
                                            </a>

                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-account-plus"></i>
                                                </div>
                                                <p className="notify-details">New user registered.
                                                    <small className="text-muted">5 hours ago</small>
                                                </p>
                                            </a>

                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                <p className="notify-details">Cristina Pride</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Hi, How are you? What about our next meeting</small>
                                                </p>
                                            </a>

                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary">
                                                    <i className="mdi mdi-comment-account-outline"></i>
                                                </div>
                                                <p className="notify-details">Caleb Flakelar commented on Admin
                                                    <small className="text-muted">4 days ago</small>
                                                </p>
                                            </a>

                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon">
                                                    <img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                <p className="notify-details">Karen Robinson</p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Wow ! this admin looks good and awesome design</small>
                                                </p>
                                            </a>

                                        
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info">
                                                    <i className="mdi mdi-heart"></i>
                                                </div>
                                                <p className="notify-details">Carlos Crouch liked
                                                    <b>Admin</b>
                                                    <small className="text-muted">13 days ago</small>
                                                </p>
                                            </a>
                                        </div>

                                        <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                            View All
                                        </a>

                                    </div>
                                </li>

                                <li className="dropdown notification-list d-none d-sm-inline-block">
                                    <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="dripicons-view-apps noti-icon"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">

                                        <div className="p-2">
                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/slack.png" alt="slack"/>
                                                        <span>Slack</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/github.png" alt="Github"/>
                                                        <span>GitHub</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                                        <span>Dribbble</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="row g-0">
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                                        <span>Bitbucket</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                                        <span>Dropbox</span>
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a className="dropdown-icon-item" href="#">
                                                        <img src="assets/images/brands/g-suite.png" alt="G Suite"/>
                                                        <span>G Suite</span>
                                                    </a>
                                                </div>
                                            </div> 
                                        </div>

                                    </div>
                                </li>

                                <li className="notification-list">
                                    <a className="nav-link end-bar-toggle" href="javascript: void(0);">
                                        <i className="dripicons-gear noti-icon"></i>
                                    </a>
                                </li>

                                <li className="dropdown notification-list">
                                    <a className="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false"
                                        aria-expanded="false">
                                        <span className="account-user-avatar"> 
                                            <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"/>
                                        </span>
                                        <span>
                                            <span className="account-user-name">Dominic Keller</span>
                                            <span className="account-position">Founder</span>
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                                    
                                        <div className=" dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">Welcome !</h6>
                                        </div>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account-circle me-1"></i>
                                            <span>My Account</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-account-edit me-1"></i>
                                            <span>Settings</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lifebuoy me-1"></i>
                                            <span>Support</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-lock-outline me-1"></i>
                                            <span>Lock Screen</span>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <i className="mdi mdi-logout me-1"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>

                            </ul>
                            <button className="button-menu-mobile open-left">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className="app-search dropdown d-none d-lg-block">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control dropdown-toggle"  placeholder="Search..." id="top-search"/>
                                        <span className="mdi mdi-magnify search-icon"></span>
                                        <button className="input-group-text btn-primary" type="submit">Search</button>
                                    </div>
                                </form>

                                <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                                
                                    <div className="dropdown-header noti-title">
                                        <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                                    </div>

                                
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="uil-notes font-16 me-1"></i>
                                        <span>Analytics Report</span>
                                    </a>

                                
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="uil-life-ring font-16 me-1"></i>
                                        <span>How can I help you?</span>
                                    </a>

                                
                                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                                        <i className="uil-cog font-16 me-1"></i>
                                        <span>User profile settings</span>
                                    </a>

                                
                                    <div className="dropdown-header noti-title">
                                        <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                    </div>

                                    <div className="notification-list">
                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="d-flex">
                                                <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32"/>
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Erwin Brown</h5>
                                                    <span className="font-12 mb-0">UI Designer</span>
                                                </div>
                                            </div>
                                        </a>

                                    
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="d-flex">
                                                <img className="d-flex me-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32"/>
                                                <div className="w-100">
                                                    <h5 className="m-0 font-14">Jacob Deo</h5>
                                                    <span className="font-12 mb-0">Developer</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                    
            </div>
        )
    }
}

export default Menu;