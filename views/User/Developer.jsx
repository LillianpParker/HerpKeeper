const React = require('react');
const Default = require('../Components/Default.jsx');

class Developer extends React.Component {
    render() {
        return (
            <Default>
            <div>
            <div className="grid-container">
                {/* Logo */}
                <div className="Log-Placeholder">
                            <img className="Logo" src="https://i.imgur.com/RxOMcaH.png"></img>
                    </div>
                {/* Log In */}
                <div className="Log-In">
                            <form id="login" method="get" action="login.php">
                                <label>User Name</label><br/>
                                <input type="text" name="Uname" id="Uname" placeholder="Username" />
                                <br /><br />
                                <label>Password</label><br/>
                                <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                                <br /><br />
                                <input type="checkbox" id="check" />
                                <span>Remember me</span>
                                <br /><br />
                                <a href="#">Forgot Password</a>
                            </form>
                        </div>
                        <div>
                        <h1> The Creator of HerpKeeper</h1>
                        <p>Lillian Parker, a zookeeper turned Software Engineer graduated from West Texas A&M University with a Bachelors of Science in Wildlife Biology. With a degree and a passion for herpetofauna by her side, she began working at at an Aquarium in the reptile department, and rose through the ranks quickly until she was promoted to a Lead. From there she and her team revolutionized the department and all the herpetofauna within their care.</p>
                        <p>Wanting to increase her knowledge of husbandry for a variety of taxa, Lillian moved up to North Dakota to become part of the Dakota Zoo and helped the team there care for the variety of animals within the Dakota Zoo that included felids, canids, ursids, and a variety of exotic hoofstock. After experiencing mammals and birds, Lillian finalized her true passion was for herpetofauna, particularly the underappreciated species, and with an idea in mind, and newfound knowledge of software engineering, she set out to make HerpKeeper for those who maintain collections of Herpetofauna and have found that pen, paper, and water don't mix.</p>
                        </div>
                        {/* Nav Bar */}
                        <div className="Nav-bar">
                            <nav className="navigation">
                                <ul className="mainmenu">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/new">New Record</a></li>
                                    <li><a>About HerpKeeper</a>
                                        <ul className="submenu">
                                            <li><a href="/Site">About the Site</a></li>
                                            <li><a href="/Developer">About the Developer</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Resources</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* Social Media */}
                        <div className="Social-Media">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-twitter"></a>
                        </div>
                </div>
            </div>
        </Default>
        )
    }
}

module.exports = Developer;