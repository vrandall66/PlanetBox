import React from 'react';

class IdeaForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      terrain: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let planet = {
      name: this.state.name,
      terrain: this.state.terrain
    }
    this.props.handleAddPlanet(e, planet)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          />
        <input
          type="text"
          placeholder="terrain"
          name="terrain"
          value={this.state.terrain}
          onChange={(e) => this.handleChange(e)}
          />
        <button
          onClick={(e) => this.handleSubmit(e)}
        >Submit</button>
      </form>
    )
  }
}

export default IdeaForm;