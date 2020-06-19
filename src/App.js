import React from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./YoutubeApi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "semantic-ui-css/semantic.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }
  handleSubmit = async (termFromSearchBar) => {
    const response = await Youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({ videos: response.data.items });
  };
  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five-wide-column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
