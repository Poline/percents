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
    const { data, currentIndex } = this.props,
      currentData = data[currentIndex];
    
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

        <div className='main__items'>
          {currentData.map((el, index) => (
            <div className='main__items-item' key={`slider${index}${el.percent}`}>
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

        <div className='main__result'>
          <div>Результат</div>
          {currentData.map((el, index) => (
            <div className='main__result-item'> <span>{el.name}:</span> <span> {el.percent} % </span> </div>
          ))}
        </div>
      
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.data,
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
