import React from 'react';
import { Row, Col } from 'antd';
import Utils from '../../utils/utils';
import axios from 'axios';
import './index.less';

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
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = '青岛';
    axios.get("https://free-api.heweather.net/s6/weather/now?location=" + encodeURIComponent(city) + "&key=6b2bd283b36c42209b5d4f0b8ffcb726")
    .then(res => {
      if(res.statusText == 'OK') {
        let data = res.data.HeWeather6[0].now
        console.log(data)
        this.setState({
          weatherPicCode: data.cond_code,
          weather: data.cond_txt
        })
      }
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
            <span className="weather-detail">
              <img src={'assets/' + this.state.weatherPicCode + '.png'} alt=""/>
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}