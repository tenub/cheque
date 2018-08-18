import React, { Component } from 'react';

import Input from './Input';

class Cheque extends Component {
  render() {
    return (
      <form className="c-cheque">
        <div className="c-cheque__name">
          <Input
            className="c-cheque__input c-cheque__input--name"
            type="text"
            name="name"
            placeholder="Full Name" />
        </div>
      </form>
    );
  }
}

export default Cheque;
