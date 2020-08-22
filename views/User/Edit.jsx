const React = require('react');
const Default = require('../Components/Default.jsx');

class Show extends React.Component {
    render() {
        const { order, name, species, color, proven } = this.props.StarterInfo;
        return (
            <Default>
            <div>
                <h1>Show Record: {species}</h1>
                <p>Testing more testing</p>
            </div>
        </Default>
        )
    }
}

module.exports = Show;