import { Component } from "react";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
