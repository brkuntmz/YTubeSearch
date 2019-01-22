import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ term: value });
  };

  onSearchSubmit = event => {
    event.preventDefault();

    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <label>Video Search</label>
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            type="text"
            placeholder="Please enter the video title"
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
