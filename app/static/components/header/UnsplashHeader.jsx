define(function(require, exports, module) {
  var React = require("react");
  var maximumHeight = 700;
  module.exports = React.createClass({
    getInitialState: function() {
      return {windowWidth: window.innerWidth,srcImage:this.buildImageSource("https://source.unsplash.com/category/technology",window.innerWidth,maximumHeight)};
    },
    handleResize: function(e) {
      this.setState({windowWidth: window.innerWidth,srcImage:this.buildImageSource("https://source.unsplash.com/category/technology",window.innerWidth,maximumHeight)});
    },
    componentDidMount: function() {
      window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function() {
      window.removeEventListener('resize', this.handleResize);
    },
    buildImageSource: function(apiUrl,width,height){
      console.log(apiUrl+"/"+width+"x"+height);
        return apiUrl+"/"+width+"x"+height;
    },
    render: function() {
      return (
        <div className="ui vertical masthead center aligned unsplash">
          <img width={this.state.windowWidth} src={this.state.srcImage} />
        </div>
      )
    }
  })
})
