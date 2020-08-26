const React = require('react');
const Default = require('../Components/Default.jsx');

class Site extends React.Component {
    render() {
        return (
            <Default>
            <div>
            <div className="grid-container2">
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
                                <a className="forgotPass" href="#">Forgot Password</a>
                            </form>
                        </div>
                        <div className="Site-Info">
                            <h1>Behind the scenes of HerpKeeper</h1>
                            <p className="pColor">HerpKeeper is an online directory for keepers to maintain records of the herpetofauna within their collections. Every herp keeper has lost parts of a record here and there to water stains, blood, invertebrate mess, or worse enough, musk. And so, a keeper turned software engineer turned a fleeting thought into a reality. From vet records to feeding schedules, HerpKeeper has the ability to keep your records away from the soiling and mess that some herps decide to bestow upon you, and in a less messy place.</p>
                            <h1>Upcoming Updates</h1>
                            <ul>
                                <li className="siteLi">Login verification and encryption</li>
                                <li className="siteLi">Calendar schedules for feeding, defecating, and medicating</li>
                                <li className="siteLi">Referencing records for easier locating</li>
                            </ul>
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
                                    <li><a href="/Resources">Resources</a></li>
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

module.exports = Site;