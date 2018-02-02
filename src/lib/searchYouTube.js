// var searchYouTube = (options, callback) => {
//   $.ajax({
//     type: 'GET',
//     data: $.extend({
//       key: options.key,
//       q: options.query,
//       part: 'snippet',
//       type: 'video'
//     }, {maxResults: options.max}),
//     timeout: 5000,
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     success: (data) => {
//       callback(data.items);
//     },
//     error: () => console.log('get request from search failed')
//   });
// };
// window.searchYouTube = searchYouTube;

var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  url += '?part=snippet';
  url += '&maxResults=' + options.max;
  url += '&q=' + options.query;
  url += '&type=video&videoEmbeddable=true';
  url += '&key=' + options.key;
  

  fetch(url).then((response) => { return response.json(); })
    .then (function(data) {
      callback(data.items);
    });
};

window.searchYouTube = searchYouTube;
