import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.dir(info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="">
          <h1>Ooops. That is not good.</h1>
          <p>error: {this.state.msg}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
