// TODO: Render the `App` component to the DOM
console.log('index.js view of window.searchYouTube: ', window.searchYouTube);
console.log('index.js view of window.YOUTUBE_API_KEY: ', window.YOUTUBE_API_KEY);

ReactDOM.render(<App searchYouTube={window.searchYouTube} API_KEY={window.YOUTUBE_API_KEY}/>, document.getElementById("app"));
