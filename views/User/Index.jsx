const React = require('react');
const Default = require('../Components/Default.jsx');
// const Information = this.props.Information;

class Index extends React.Component {
    render() {
        const {name, species, color, proven } = this.props.StarterInfo;
        return (
            <Default>
            <div>
                {this.props.StarterInfo.map((record, i) => {
                    return (
                        <div class="grid-container">
                        <div className="Log-Placeholder">
                            <img className="Logo" src="https://i.imgur.com/RxOMcaH.png"></img>
                        </div>
                        <div className="Records">
                            <h1>Records</h1>
                            <p>keh keh keh</p>
                            <a href="/new">New Record</a>
                        </div>
                        <div className="News">
                            <p>Bleh bleh bleh</p>
                        </div>
                        <div className="Site-Updates">
                            <p>blelelop</p>
                        </div>
                        <div className="Log-In">
                            <p>fancy fancy if it works</p>
                        </div>
                        <div className="Nav-bar">
                        <nav class="navigation">
  <ul class="mainmenu">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Products</a>
      <ul class="submenu">
        <li><a href="">Tops</a></li>
        <li><a href="">Bottoms</a></li>
        <li><a href="">Footwear</a></li>
      </ul>
    </li>
    <li><a href="">Contact us</a></li>
  </ul>
</nav>
                        </div>
                        <div className="Social-Media">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        </div>
                        </div>
                        )
                    })
                }
            </div>
            </Default>
        )
    }
}

module.exports = Index;