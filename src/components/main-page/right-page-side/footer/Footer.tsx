import React, { Component } from 'react'
import { Layout, Breadcrumb } from "antd";
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';


const { Footer } = Layout;


interface Props {
    
}
interface State {
    
}

export default class MyFooter extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Footer className="footer"  style={{ textAlign: 'center' }}>
                Ant Design ©2019 Created by BongBongAnt
            </Footer >
        )
    }
}
