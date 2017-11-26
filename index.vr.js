import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';
import avios from 'react-native-axios';

import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';
import VideoPlayer from './components/scenes/VideoPlayer';


export default class VrCinema extends React.Component {
    render() {
        return (
            <View>
                {/*<TitleScene showButton={true} text={"Watch a Video"}/>*/}
                {/*<Dashboard showButton={false} text={"Select Environment"}/>*/}
                <VideoPlayer showButton={true} text={"Back to Main"}/>
            </View>
        );
    }
};

AppRegistry.registerComponent('VrCinema', () => VrCinema);
