const React = require('react');
const Default = require('../Components/Default.jsx');

class Show extends React.Component {
    render() {
        const { order, name, species, color, proven } = this.props.StarterInfo;
        return (
            <Default>
            <div>
                <h1>Record {species}: {name} {order}</h1>
                <p>Testing 1 .. 2 .. 3</p>
            </div>
        </Default>
        )
    }
}

module.exports = Show;