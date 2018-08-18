import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const placeholder = this.props.placeholder || '';

    this.state = {
      selected: false,
      size: props.size || placeholder.length || 1
    }
  }

  handleBlur(event) {
    if (this.state.selected) {
      this.setState({ selected: false });
    }
  }

  handleFocus(event) {
    if (!this.state.selected) {
      //event.target.select();
      this.setState({ selected: true });
    }
  }

  handleChange(event) {
    const value = event.target.value;

    if (value) {
      const size = value.length;

      this.setState({ size });
    } else {
      const placeholder = event.target.placeholder || '';
      const size = placeholder.length;

      this.setState({ size });
    }
  }

  render() {
    return (
      <input {...this.props}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        maxLength="50" />
    );
  }
}

export default Input;
