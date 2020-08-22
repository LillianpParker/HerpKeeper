const React = require('react');
const Default = require('../Components/Default.jsx');

class New extends React.Component {
    render() {
      const options = this.props.order
      return (
        <Default>
          <div>
              <h1>New Record</h1>
              <form action="/" method="POST">
                <label>Order: </label>
                <select name="order">
              {
                options.map((option, i) => {
                  return(
                  <option>{option}</option>
                  )
                })
                }
                </select><br/>
                Name or ID: <input type="text" name="name" /><br/>
                Species: <input type="text" name="species" /><br/>
                Color or Morph: <input type="text" name="color" /><br/>
                Proven Individual: <input type="checkbox" name="proven" /><br/>
                <input className="submit" type="submit" name="" value="Create Record"/><br/>
               </form>
          </div>
          </Default>
          );
    }
  }
  
  module.exports = New;