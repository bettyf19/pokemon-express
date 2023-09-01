const React = require('react');

class New extends React.Component {
    render() {
    return (
        <div>
            <h1>New Pokemon Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemons" method="POST">
                Name: <input type="text" name="name" /><br/>
                Image URL: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
                <br></br>
                <a href="/pokemons">Back</a>
            </form>
        </div>);
    }
    }

module.exports = New;