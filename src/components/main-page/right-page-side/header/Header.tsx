import React, { Component } from 'react'
import { Layout } from 'antd';

const { Header  } = Layout;

interface Props {
    
}
interface State {
    
}

export default class MyHeader extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Header className="header" style={{ background: '#fff', padding: 0 }}>
                I'm header
            </Header >
        )
    }
}
