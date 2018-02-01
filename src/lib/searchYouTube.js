var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    data: $.extend({
      key: YOUTUBE_API_KEY,
      q: options,
      part: 'snippet'
    }, {maxResults: 5}),
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: (data) => {
      callback(data);
    },
    error: () => console.log('get request from search failed')
  });
};
window.searchYouTube = searchYouTube;
