import React from 'react';
import { connect } from 'react-redux';
import './Main.scss';

class Main extends React.Component{

  render () {
    return(
      <div>
        Hello world!
      </div>
    )
  }
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Main);
