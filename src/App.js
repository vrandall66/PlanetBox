import React from 'react';
import IdeasContainer from './Components/IdeasContainer/IdeasContainer'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
      ]
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.setState({ideas: data.results}))
  }

  render() {
    return (
      <main>
      <IdeasContainer ideas={this.state.ideas}/>
      </main>
    )
  }
}

export default App;
