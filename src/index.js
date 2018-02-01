// TODO: Render the `App` component to the DOM
var nullExample = {
  id: {
    videoId: 'noVideo'
  },
  snippet: {
    title: 'Never Gonna Give You Up',
    description: 'Never Gonna Let You Down',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      }
    }
  }
};

ReactDOM.render(<App searchYouTube= {searchYouTube} nullExample= {nullExample}/>, document.getElementById('app'));

