const React = require('react')

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

class Show extends React.Component {
    render() {
        const pokes = this.props.pokes;
        return (
            <div>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{capitalizeFirstLetter(this.props.pokes.name)}</h2> <br></br>
                <img src={`${this.props.pokes.img}.jpg`} alt={pokes.name} />
                <a href="/pokemons">Back</a>
            </div>
        );
    }
}

module.exports = Show;

