import React from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr';

import DashboardLayout from './layouts/DashboardLayout';

//Scene
class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('space.jpg')}/>
                <DashboardLayout
                    previews={this.props.previews}
                    text={this.props.text}
                />
            </View>
        )
    }
}

module.exports = Dashboard;
