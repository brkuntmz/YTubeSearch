import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

import VideoList from "./VideoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  onSearch = async term => {
    const result = await youtube.get("search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: result.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
