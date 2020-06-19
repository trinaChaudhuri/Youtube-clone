import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="serach-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              name="video-search"
              onChange={this.handleChange}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
