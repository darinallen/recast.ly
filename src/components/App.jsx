class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('civilization 6');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      });
    });
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Nav onSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            onVideoListEntryClick={this.onVideoListEntryClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
