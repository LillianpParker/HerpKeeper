const React = require('react');
const Default = require('../Components/Default.jsx');

class Edit extends React.Component {
    render() {
        const record = this.props.StarterInfo;
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
                        <img className="EditImg" src={record.img}align="left"/>
                        <form className="editBoxes" action="/" method="POST">
                            Update Photo: <input type="img" name="img" defaultValue={record.photo}/><br/>
                            Name or ID: <input type="text" name="name" defaultValue={record.name}/><br/>
                            Species: <input type="text" name="species" defaultValue={record.species} /><br/>
                            Sex: <input type="option" name="sex" defaultValue={record.sex} /><br/>
                            Color or Morph: <input type="text" name="color" defaultValue={record.color}/><br/>
                            Proven Individual: <input type="checkbox" name="proven" defaultValue={record.proven}/><br/>
                            <input className="submit" type="submit" name="" value="Update Record"/><br/>
                        </form>
                        <form action={`/${record._id}?_method=DELETE`} method="POST">
                        <input className="delete" type="submit" value="Delete Record?"/>
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

module.exports = Edit;