import React from 'react';
import {
    Text,
    View,
    VrButton,
    asset,
    Pano
} from 'react-vr';

import VideoPlayerLayout from './layouts/VideoPlayerLayout';

//Scene
class VideoPlayer extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('space.jpg')}/>
                <VideoPlayerLayout
                    showButton={this.props.showButton}
                    text={this.props.text}
                />
                {/*<TitleLayout text={this.props.text}/>*/}
            </View>
        )
    }
}

module.exports = VideoPlayer;
