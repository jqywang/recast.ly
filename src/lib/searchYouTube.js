var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    data: $.extend({
      key: options.key,
      q: options.query,
      part: 'snippet',
      type: 'video'
    }, {maxResults: options.max}),
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: (data) => {
      callback(data.items);
    },
    error: () => console.log('get request from search failed')
  });
};
window.searchYouTube = searchYouTube;
