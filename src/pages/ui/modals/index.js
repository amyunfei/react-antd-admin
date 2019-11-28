import React from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less'

export default class Modals extends React.Component {

  state = {
    showModel1: false,
    showModel2: false,
    showModel3: false,
    showModel4: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认?',
      content: '宁确定吗?',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('cancel')
      }
    })
  }

  render() {
    return (
      <div className="modal-page">
        <Card title="基础模态框" className="card">
          <Button type="primary" onClick={() => this.handleOpen('showModel1')}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModel2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModel3')}>顶部20px</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModel4')}>水平竖直居中</Button>
        </Card>
        <Card title="信息确认框" className="card">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal title="React" visible={this.state.showModel1} onCancel={() => {
          this.setState({
            showModel1: false
          })
        }}>
          <p>这是一个弹框</p>
        </Modal>
        <Modal title="React" okText="下一步" cancelText="算了" visible={this.state.showModel2} onCancel={() => {
          this.setState({
            showModel2: false
          })
        }}>
          <p>这是一个弹框</p>
        </Modal>
        <Modal className="two-zero-px" title="React" visible={this.state.showModel3} onCancel={() => {
          this.setState({
            showModel3: false
          })
        }}>
          <p>这是一个弹框</p>
        </Modal>
      </div>
    );
  }
}