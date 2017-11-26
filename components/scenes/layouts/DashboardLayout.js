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

    constructor(props) {
        super(props);
        this.state = {
            slideLeft: new Animated.Value(-1),
            fadeIn: new Animated.Value(0),
            showButton: false,
            color1: "#5234df",
            color2: "#BDDAF1",
            text: this.props.text,
            borderWidths: [0, 0, 0, 0, 0, 0]
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
        this.setState({color1: "#BDDAF1", color2: "#5234df", text: "Watch Video"});
    }

    // updateShowButton() {
    //     this.setState({showButton: true});
    // }
    //previously updateShowButton
    updateStage(input) {
        if(this.state.showButton === false) {
            this.setState({showButton: true});
        }

        switch (input) {
            case 1:
                this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
                break;
            case 2:
                this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
                break;
            case 3:
                this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
                break;
            case 4:
                this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
                break;
            case 5:
                this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
                break;
            case 6:
                this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
                break;
        }
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
                        //{translate: [0, 0, -3]},
                        {translateX: this.state.slideLeft},
                        {translateZ: -3}
                        ],
                    marginTop: -0.3
                }}>
                    <MenuButtons/>
                    <TileButtons updateStage={this.updateStage.bind(this)} borderWidths={this.state.borderWidths}/>
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
                            text={this.state.text}/>
                </View>
            </View>
        )
    }
}

module.exports = DashnoardLayout;