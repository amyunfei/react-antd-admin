import React from 'react';
import { Card, Button, message } from 'antd'

export default class Message extends React.Component {

  handleOpen = (type) => {
    message[type]('这是一条提示')
  }

  render() {
    return (
      <div>
        <Card title="消息提示框" className="card">
          <Button type="primary" onClick={() => this.handleOpen('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleOpen('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.handleOpen('loading')}>Loading</Button>
          <Button type="danger" onClick={() => this.handleOpen('error')}>Error</Button>
        </Card>
      </div>
    );
  }
}