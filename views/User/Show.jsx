const React = require('react');
const Default = require('../Components/Default.jsx');

class Show extends React.Component {
    render() {
        const record = this.props.StarterInfo;
        const vetInfo = this.props.VetInfo;
        const feed = this.props.FeedingInfo;
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
                                <label>User Name</label><br />
                                <input type="text" name="Uname" id="Uname" placeholder="Username" />
                                <br /><br />
                                <label>Password</label><br />
                                <input type="Password" name="Pass" id="Pass" placeholder="Password" />
                                <br /><br />
                                <input type="checkbox" id="check" />
                                <span>Remember me</span>
                                <br /><br />
                                <a className="forgotPass" href="#">Forgot Password</a>
                            </form>
                        </div>
                        <div className="Site-Info">
                            <img className="ShowImg" src={record.img} align="right" />
                            <h1>Record for {record.name}</h1>
                            <h1>{record.species}</h1>
                            <h1>{record.order}</h1>
                            <hr></hr>
                            <div>
                                <div>
                                    <p>Sex: {record.sex}</p>
                                    <p>Color/Morph: {record.color}</p>
                                    <p>Markings: {record.markings}</p>
                                    <p>Origin: {record.origin}</p>
                                    <p>Proven: Yes</p>
                                    <hr></hr>
                                </div>
                                <div>
                                {vetInfo.map((vet, i) => {
                                    return (
                                    <div>
                                        <h1>Veterinary Information</h1>
                                        <p>Vet Office: {vet.vetOffice}</p>
                                        <p>Vet Phone Number: {vet.vetNumber}</p>
                                        <p>Name of Vet: {vet.vetName}</p>
                                        <p>Recent Visit: {vet.recentVisit}</p>
                                        <p>Bloodwork Done: {vet.bloodworkPerformed}</p>
                                        <p>Bloodwork Shown: {vet.bloodworkShowed}</p>
                                        <p>Healthy: {vet.health}</p>
                                        <p>Name of Illness: {vet.illness}</p>
                                        <p>Date Diagnosed: {vet.dateDiagnosed}</p>
                                        <p>Perscription: {vet.perscription}</p>
                                        <p>Illness still Active: {vet.illnessStatus}</p>
                                        <hr></hr>
                                    </div>
                                    )
                                })}
                            </div>
                            </div>
                            <hr></hr>
                            <div>
                                {feed.map((feed, i) => {
                                    return(
                                    <div>
                                        <h1>Feeding Information</h1>
                                        <p>Food Supplier: {feed.supplier}</p>
                                        <p>Fed On: {feed.feedingDate}</p>
                                        <p>Item Fed: {feed.feedingItem}</p>
                                        <p>Amount Fed: {feed.feedingAmount}</p>
                                        <p>Excretion: {feed.excretion}</p>
                                        <hr></hr>
                                    </div>
                                )})}
                            </div>
                            <a className="resource" href={`/${record._id}/edit`}>Edit Record</a>
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

module.exports = Show;