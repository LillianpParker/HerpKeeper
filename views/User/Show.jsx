const React = require('react');
const Default = require('../Components/Default.jsx');

class Show extends React.Component {
    render() {
        const { order, name, species, color, proven, img } = this.props.StarterInfo;
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
                    <div className="Records">
                        <img src={records.img}/>
                        <h1>Record for {record.name}; {record.species}</h1>
                    </div>
                        {/* Nav Bar */}
                        <div className="Nav-bar">
                            <nav className="navigation">
                                <ul className="mainmenu">
                                    <li><a href="/herp-keeper">Home</a></li>
                                    <li><a href="/herp-keeper/new">New Record</a></li>
                                    <li><a>About HerpKeeper</a>
                                        <ul className="submenu">
                                            <li><a href="/herp-keeper/Site">About the Site</a></li>
                                            <li><a href="/herp-keeper/Developer">About the Developer</a></li>
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

module.exports = Show;