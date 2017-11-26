import  React from 'react';
import {
    View,
    Animated
} from 'react-vr';

import { Easing } from 'react-native';

import MenuButtons from './elements/MenuButtons';
import TileButtons from './elements/TitleButtons';
import ProgressCircles from './elements/ProgressCircles';
import Button from './elements/Button';

class DashnoardLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            slideLeft: new Animated.Value(-1),
            fadeIn: new Animated.Value(0),
            showButton: false,
            color1: "#5234df",
            color2: "#BDDAF1"
        };
    }

    componentDidMount() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.slideLeft,
                    {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.ease
                    }
                ),
                Animated.timing(
                    this.state.fadeIn,
                    {
                        toValue: 1,
                        duration: 4000,
                        easing: Easing.ease
                    }
                )
            ])
        ]).start();
    }

    updateScene() {
        this.setState({color1: "#BDDAF1", color2: "#5234df"});
    }

    updateShowButton() {
        this.setState({showButton: true});
    }

    render() {
        return (
            <View>
                <Animated.View style ={{
                    width: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    layoutOrigin: [0.5, 0.5],
                    opacity: this.state.fadeIn,
                    transform: [
                        {translate: [0, 0, -3]},
                        {translateX: this.state.slideLeft},
                        {translateZ: -0.3}
                        ],
                    marginTop: -0.3
                }}>
                    <MenuButtons/>
                    <TileButtons updateShowButton={this.updateShowButton.bind(this)}/>
                    <ProgressCircles color1={this.state.color1} color2={this.state.color2}/>
                </Animated.View>

                <View style ={{
                    width: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -3]}],
                    marginTop: -0.7
                }}>
                    <Button updateScene={this.updateScene.bind(this)}
                            showButton={this.state.showButton}
                            text={this.props.text}/>
                </View>
            </View>
        )
    }
}

module.exports = DashnoardLayout;