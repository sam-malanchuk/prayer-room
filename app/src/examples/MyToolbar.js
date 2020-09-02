import React from 'react';

import {Toolbar, BackButton} from '../components/index.js';

export default class extends React.Component {
  render() {
    return(
      <Toolbar modifier={this.props.modifier} >
        <div className="left"><BackButton modifier={this.props.modifier}>Back</BackButton></div>
        <div className="center">{this.props.title}</div>
      </Toolbar>
    )
  }
}
