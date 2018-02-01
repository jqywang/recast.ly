class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideoList: [],
      selectedVid: this.props.nullExample
    };
  }
  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'dogs', max: 5}, this.changeList.bind(this));
  }
  setSelected(video) {
    this.setState({selectedVid: video});
  }
  changeList(data) {
    this.setState({selectedVideoList: data, selectedVid: data[0] || this.props.nullExample});
    // on success ::::this.setState({seletedVideoList: soemthign}, {selectedVid: something[0]});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search changeList={this.changeList.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.selectedVid}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.selectedVideoList} setSelected={this.setSelected.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// ReactDOM.render(<App/>, document.getElementById("app"));