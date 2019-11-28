import React from 'react';
import { Card, Buttom, Spin, Icon, Alert } from 'antd';

export default class Loading extends React.Component {

  render() {
    const icon = <Icon type="loading" />
    return (
      <div>
        <Card title="Spain用法" className="card">
          <Spin style={{marginRight: 10}} size="small" />
          <Spin style={{marginRight: 10}} />
          <Spin style={{marginRight: 10}} size="large" />
          <Spin indicator={icon} />
        </Card>
        <Card title="内容遮罩" className="card">
          <Alert message="React" description="这是一条说明" type="info" />
          <Alert message="React" description="这是一条说明" type="warning" />
          <Alert message="React" description="这是一条说明" type="success" />
          <Spin>
            <Alert message="React" description="这是一条说明" type="info" />
          </Spin>
          <Spin tip="请稍后...">
            <Alert message="React" description="这是一条说明" type="info" />
          </Spin>
          <Spin tip="请稍后..." indicator={icon}>
            <Alert message="React" description="这是一条说明" type="info" />
          </Spin>
        </Card>
      </div>
    );
  }
}