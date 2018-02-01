class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeList('dogs');
    this.state = {
      selectedVideoList: exampleVideoData,
      selectedVid: exampleVideoData[0]
    };
  }
  setSelected(video) {
    this.setState({selectedVid: video});
  }
  changeList(query) {
    $.ajax({
      type: 'GET',
      data: $.extend({
        key: YOUTUBE_API_KEY,
        q: query,
        part: 'snippet'
      }, {maxResults: 5}),
      timeout: 2000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: (data) => {
        //console.log(this);
        this.setState({selectedVideoList: data.items, selectedVid: data.items[0]});
      },
      error: () => console.log('get request from search failed')
    });
    
    
    
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
ReactDOM.render(<App/>, document.getElementById("app"));