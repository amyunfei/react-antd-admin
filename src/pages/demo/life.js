import React from 'react';
import Child from './Child';
import './life.less';
import { Button } from 'antd';
// import 'antd/dist/antd.css'

export default class Life extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleAdd = () => {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className='box'>
        <p>React生命周期</p>
        <Button onClick={this.handleAdd}>点击一下</Button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    )
  }
}