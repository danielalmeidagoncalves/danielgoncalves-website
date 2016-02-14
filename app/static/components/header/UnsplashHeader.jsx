define(function(require, exports, module) {
  var React = require("react");
  var maximumHeight = 700;
  module.exports = React.createClass({
    getInitialState: function() {
      return {
        windowWidth: window.innerWidth,
        srcImage: this.buildImageSource("https://source.unsplash.com/category/technology", window.innerWidth, maximumHeight)
      };
    },
    handleResize: function(e) {
      this.setState({
        windowWidth: window.innerWidth,
        srcImage: this.buildImageSource("https://source.unsplash.com/category/technology", window.innerWidth, maximumHeight)
      });
      this.animate();
    },
    componentDidMount: function() {
      window.addEventListener('resize', this.handleResize);
      this.animate();
    },
    componentWillUnmount: function() {
      window.removeEventListener('resize', this.handleResize);
    },
    buildImageSource: function(apiUrl, width, height) {
      console.log(apiUrl + "/" + width + "x" + height);
      return apiUrl + "/" + width + "x" + height;
    },
    animate: function() {
      var unsplashImage = $(this.refs.unsplashImage);
      $(unsplashImage[0]).transition({
        animation  : 'fade',
        duration   : '30s'
      });
    },
    render: function() {
      return (
        <div
          id="unsplash"
          ref="unsplashImage"
          className="ui vertical masthead center aligned unsplash transition hidden">
          <img
            width={this.state.windowWidth}
            src={this.state.srcImage}/>
        </div>
      );
    }
  });
});
