var searchYouTube = (options, callback) => {
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search?' + 'maxResults=' + options.max + '&q=' + options.query + '&key=' + options.key,
    type: 'GET',
    // data: { order: '-createdAt' },
    contentType: 'application/json',
    //headers: {"Content-Security-Policy": 'default-src "none"; script-src "self"; connect-src "self"; img-src "self"; style-src "self"'},

    success: function(videos) {
      console.log('videos came in');
      // var videos = videos.results;
      // videos.forEach(function(video) {
      //   // do something
      // });
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('recast.ly: Failed to receive videos', data);
    }
  });
};

window.searchYouTube = searchYouTube;
