import React from 'react';
import Daugther from './Daugther';

class Mother extends React.Component {

  render() {

    return (
      <div>
        <h2>
          Hello i'm Mother
        </h2>
        <Daugther />
      </div >
    )
  }
}

export default Mother;