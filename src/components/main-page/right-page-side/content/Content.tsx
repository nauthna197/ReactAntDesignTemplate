import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { Route } from "react-router";
import Home from "../../../pages/home/Home";

const { Content } = Layout;

interface Props {}
interface State {}

export default class MyContent extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
            <Route path="/" component={Home}></Route>
        </div>
      </Content>
    );
  }
}
