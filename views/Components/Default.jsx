const React = require('react');


class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <title>HerpKeeper</title>
                </head>
                <body>
                    <footer>
                    {this.props.children}
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Default;