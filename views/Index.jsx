const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};


class Index extends React.Component {
    render() {
      return (
        <div>
          <nav>
            <a href="/pokemons/new">Create a New Pokemon</a>
          </nav>
           <h1 style={myStyle}>Welcome to the Pokemon App!</h1>
           {console.log(this.props.pokemons)}
          <ul>
            {
              this.props.pokemons?.map((pokes, i) => {
                return (
                  <li key={i}>
                   <a href={`/pokemons/${pokes._id}`}> { capitalizeFirstLetter(pokes.name) } </a> 
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
}
  
module.exports = Index;
