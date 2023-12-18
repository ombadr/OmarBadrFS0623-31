import { Component } from 'react';

class ClassButtonComponent extends Component {
  render(props) {
    return (
      <button
        type='button'
        onClick={() => alert(`Hai cliccato ${this.props.text}`)}
      >
        {this.props.text}
      </button>
    );
  }
}

export default ClassButtonComponent;
