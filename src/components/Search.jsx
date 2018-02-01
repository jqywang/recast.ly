var Search = (props) => {
  var searchEnter = () => {
    searchYouTube($('input').val(), props.changeList);
    $('input').val('');
  };
  var lastSearch = 0;
  var liveSearch = (e) => {
    if (lastSearch + 500 < Date.now()) {
      lastSearch = Date.now();
      searchYouTube($('input').val(), props.changeList);
      if (e.keyCode === 13) {
        $('input').val('');
      }
    }
  };
  return (
    <div className="search-bar form-inline">
      <input onKeyUp={liveSearch} className="form-control" type="text" />
      <button onClick={searchEnter} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
