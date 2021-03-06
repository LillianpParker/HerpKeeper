const React = require('react');
const Default = require('../Components/Default.jsx');

class New extends React.Component {
    render() {
      const options = this.props.order
      const sexes = this.props.sex
      return (
        <Default>
          <div>
          <div>
            <div className="grid-container2">
                {/* Logo */}
                <div className="Logo-Placeholder">
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
                <div className="newInfo Site-Info">
              <h1>New Record</h1>
              <form action="/" method="POST">
                <label className="Site-Info">Order:</label>
                <select className="newSelect" name="order">
              {
                options.map((option, i) => {
                  return(
                  <option>{option}</option>
                  )
                })
                }
                </select><br/>
                <label className="Site-Info">Sex:</label>
                <select className="newSelect" name="sex">
              {
                sexes.map((sex, i) => {
                  return(
                  <option>{sex}</option>
                  )
                })
                }
                </select><br/>
                Photo: <input type="img" name="img" /><br/>
                Name or ID: <input type="text" name="name" /><br/>
                Species: <input type="text" name="species" /><br/>
                Color or Morph: <input type="text" name="color" /><br/>
                Markings: <input type="text" name="markings" /><br/>
                Origin: <input type="text" name="origin" /><br/>
                Proven Individual: <input type="checkbox" name="proven" /><br/>
                <input className="submit" type="submit" name="" value="Create Record"/><br/>
               </form>
               <h1>An Edit option will be given after individuals are made. That is where feeding and veterinary information can be created.</h1>
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
          </div>
          </Default>
          );
    }
  }
  
  module.exports = New;