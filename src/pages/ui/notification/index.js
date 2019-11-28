import React from 'react';
import { Card, Button, Radio, notification} from 'antd';

export default class Notification extends React.Component {

  handleOpen = (type, position) => {
    if(position) {
      notification.config({
        placement: position
      })
    }
    notification[type]({
      message: '发工资了',
      description: '上个月考勤22天, 迟到10天, 实发工资250, 请笑纳',
      placement: position
    })
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card">
          <Button type="primary" onClick={() => this.handleOpen('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleOpen('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning')}>Warning</Button>
          <Button type="primary" onClick={() => this.handleOpen('error')}>Error</Button>
        </Card>
        <Card title="通知提醒框方向" className="card">
          <Button type="primary" onClick={() => this.handleOpen('success','topLeft')}>topLeft</Button>
          <Button type="primary" onClick={() => this.handleOpen('info', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={() => this.handleOpen('warning', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={() => this.handleOpen('error', 'bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    );
  }
}