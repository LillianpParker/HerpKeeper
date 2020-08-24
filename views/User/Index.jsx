const React = require('react');
const Default = require('../Components/Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <div className="grid-container1">
                        {/* Logo */}
                        <div className="Log-Placeholder">
                            <img className="Logo" src="https://i.imgur.com/RxOMcaH.png"></img>
                        </div>
                        <div className="Records newInfo"><br/>
                            <h1>Current Records</h1>
                            <div className="cardTiles">
                            {this.props.StarterInfo.map((record, i) => {
                                return (
                                    <div class="card">
                                    <a href={ `herp-keeper/${record._id}/edit`}>
                                        <img className="cardImg" src={record.img} />
                                        </a>
                                        <div class="container">
                                            <h4>{record.name} - {record.species} : {record.sex}</h4>
                                            <p>{record.order}</p>
                                        </div>
                                    </div>
                            )})}
                            </div>
                        </div>
                        {/* News */}
                        <div className="News">
                            <p>Bleh bleh bleh</p>
                        </div>
                        {/* Updates */}
                        <div className="Site-Updates">
                            <p>blelelop</p>
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

module.exports = Index;