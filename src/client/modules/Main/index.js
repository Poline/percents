import React from 'react';
import { connect } from 'react-redux';
import './Main.scss';
import defaultData from './defaultData';
import { setData } from '../../reducers/main';

class Main extends React.Component{
  componentDidMount(){
    this.props.setData(defaultData);
  }

  render () {
    return(
      <div>
        Hello world!
      </div>
    )
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  setData: (credentials) => {
    dispatch(setData(credentials));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
