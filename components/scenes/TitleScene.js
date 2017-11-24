import React from 'react';
import {
    Text,
    View,
    VrButton,
    asset,
    Pano
} from 'react-vr';

import TitleLayout from './layouts/TitleLayout';

//Scene
class TitleScene extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('space.jpg')}/>
                <TitleLayout text={this.props.text}/>
            </View>
        )
    }
}

module.exports = TitleScene;
