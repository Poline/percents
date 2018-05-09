import React from 'react';
import { connect } from 'react-redux';
import './Main.scss';
import defaultData from './defaultData';
import { setData, updateCurrentIndex } from '../../reducers/main';

class Main extends React.Component{
  componentDidMount(){
    this.props.setData(defaultData);
  }

  changeCurrentEl(current){
    this.props.updateCurrentIndex(current);
  }

  render () {
    const { data } = this.props;
    debugger
    return(
      <div>
        {data.map((el, index) => (
          <button key={`button${index}`} onClick={()=>{this.changeCurrentEl(index)}}>
            {index + 1} {index + 1 > 1 ? 'elements' : 'element'}
          </button>
        ))}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main.data,
  current: state.main.current,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => {
    dispatch(setData(data));
  },
  updateCurrentIndex: (currentIndex) => {
    dispatch(updateCurrentIndex(currentIndex));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
