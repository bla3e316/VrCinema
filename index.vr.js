import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';


export default class VrCinema extends React.Component {
    render() {
        // <TitleScene showButton={true} text={"Watch a Video"}/>
        return (
            <View>
                <Dashboard showButton={false} text={"Select Environment"}/>
            </View>
        );
    }
};

AppRegistry.registerComponent('VrCinema', () => VrCinema);
