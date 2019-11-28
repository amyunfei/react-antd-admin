import React from 'react';
import { Card, Button, Radio} from 'antd'
import './index.less'

export default class Buttons extends React.Component {

  state = {
    loading: true,
    size: 'default'
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div className="buttons-page">
        <Card title="基础按钮" className="card">
          <Button type="primary">button</Button>
          <Button>button</Button>
          <Button type="dashed">button</Button>
          <Button type="danger">button</Button>
          <Button disabled>button</Button>
        </Card>
        <Card title="图形按钮" className="card">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className="card">
          <Button.Group>
            <Button type="primary" icon="left" style={{margin: 0}}>返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮大小" className="card">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>button</Button>
          <Button size={this.state.size}>button</Button>
          <Button type="dashed" size={this.state.size}>button</Button>
          <Button type="danger" size={this.state.size}>button</Button>
          {this.state.size}
        </Card>
      </div>
    );
  }
}