'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        return e(
            'button',
            { onClick: () => this.setState({ liked: !this.state.liked }) },
            'unlike'
          );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#react_div');
ReactDOM.render(React.createElement(LikeButton), domContainer);
