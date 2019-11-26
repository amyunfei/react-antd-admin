import React from 'react';
import { Row, Col } from 'antd';
import Utils from '../../utils/utils'
import './index.less'


export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      name: '鸟不拉屎大王'
    })
    setInterval(() => {
      let sysTime = Utils.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    })
  }

  render() {
    return (
      <div className="header">
        <Row className="header-admin">
          <Col span={24}>
            <span>欢迎，{this.state.name}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">天气晴朗</span>
          </Col>
        </Row>
      </div>
    );
  }
}