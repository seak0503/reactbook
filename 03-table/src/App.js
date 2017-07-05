import React, { Component } from 'react';
import './App.css';

function ListHeader(props) {
  return <th>{props.value}</th>
}

class Excel extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) =>
              <ListHeader key={idx} value={title} />
            )}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Excel;
