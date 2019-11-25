import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('will mount lo')
  }

  componentDidMount() {
    console.log('did mount')
  }

  componentWillReceiveProps(newProps) {
    console.log('will props', newProps)
  }

  shouldComponentUpdate() {
    console.log('should update')
    // 此处默认且必须return true
    // 如果return false  就不会继续往下执行了
    return true
  }

  componentWillUpdate() {
    console.log('will update')
  }

  componentDidUpdate() {
    console.log('did update')
  }

  render() {
    return (
      <div>
        <p>子组件在这呢</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}