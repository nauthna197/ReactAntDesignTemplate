import React, { Component } from "react";
import { Layout } from "antd";
import SideMenu from "./side-menu/SideMenu";
import RightPageSide from "./right-page-side/RightPageSide";
import Login from "../pages/login/Login";
import { Route, Redirect, Switch } from "react-router";

interface Props {}
interface State {}

export default class MainPage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route component={DefaultContainer}></Route>
        </Switch>
      </Layout>
    );
  }
}

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
);

const DefaultContainer = () => (
  <React.Fragment>
    <SideMenu></SideMenu>
    <RightPageSide />
  </React.Fragment>
);
