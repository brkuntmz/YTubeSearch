import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.onSearch("reactjs");
  }

  onSearch = async term => {
    const result = await youtube.get("search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
