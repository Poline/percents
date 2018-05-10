import React from 'react';
import { connect } from 'react-redux';
import './Main.scss';
import defaultData from './defaultData';
import { updateCurrentIndex } from '../../reducers/main';
import { setData, updatePercentValue } from '../../reducers/data';

class Main extends React.Component{
  constructor(props) {
    super(props);

    this.changePercentValue = this.changePercentValue.bind(this);
  }
  
  componentDidMount(){
    this.props.setData(defaultData);
  }

  changeCurrentEl(current){
    this.props.updateCurrentIndex(current);
  }

  changePercentValue(event){
    const percentValue = parseFloat(event.currentTarget.value),
      index = parseInt(event.currentTarget.name);
    
    if (percentValue <= 100 && percentValue >= 0){
      this.props.updatePercentValue({index: index, percentValue: percentValue, currentIndex: this.props.currentIndex});
    }
  }

  render () {
    const { data, currentData } = this.props;
    
    if (data.length === 0) {
      return null;
    }
    
    return(
      <div className='main'>
      
        <div className='main__buttons'>
          {data.map((el, index) => (
            <button key={`button${index}`} onClick={()=>{this.changeCurrentEl(index)}}>
              {index + 1} {index + 1 > 1 ? 'elements' : 'element'}
            </button>
          ))}
        </div>

        {currentData.map((el, index) => (
          <div key={`slider${index}${el.percent}`}>
            <span> {el.name} </span>

            <input
              name={index}
              type="range"
              min="0"
              max="100"
              step="0.01"
              value={el.percent}
              onChange={this.changePercentValue}
            />
            
            <input
              name={index}
              type="number"
              value={el.percent}
              onChange={this.changePercentValue}
              step="0.01"
            />
            
          </div>
        ))}

      
      </div>
    )
  }
};

// class Ch extends React.Component{
//   constructor(props) {
//     super(props);

//     this.changePercentValue = this.changePercentValue.bind(this);
//   }

//   changePercentValue(event){
//     debugger
//     this.props.changePercentValue(event);
//   }
  

//   render(){
//     return(
//       <input
//         name={this.props.name}
//         value={this.props.percent}
//         type="number"
//         step="any"
//         onChange={this.changePercentValue}
//       />
//     )
//   }
// }

const mapStateToProps = (state) => ({
  data: state.data,
  currentData: state.data[state.main.currentIndex],
  currentIndex: state.main.currentIndex,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => {
    dispatch(setData(data));
  },
  updateCurrentIndex: (currentIndex) => {
    dispatch(updateCurrentIndex(currentIndex));
  },
  updatePercentValue: (credentials) => {
    dispatch(updatePercentValue(credentials));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
