import React from 'react';
import {
    Text,
    View,
    VrButton,
    Animated
} from 'react-vr';

import { Easing } from 'react-native';

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            slideRight: new Animated.Value(1),
            fadeIn: new Animated.Value(0)
        };
    }


    componentDidMount() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.slideRight,
                    {
                        toValue: 0,
                        duration: 1500,
                        easing: Easing.ease
                    }
                ),
                Animated.timing(
                    this.state.fadeIn,
                    {
                        toValue: 1,
                        duration: 3000,
                        easing: Easing.ease
                    }
                )
            ])
        ]).start();
    }


    render() {
        return (
            <Animated.View style={{
                margin: 0.1,
                paddingLeft: 0.2,
                paddingRight: 0.2,
                height: 0.3,
                backgroundColor: '#bb13f7',
                borderRadius: 0.1,
                opacity: this.state.fadeIn,
                transform: [
                    {translateX: this.state.slideRight}]
            }}>
                <VrButton>
                    <Text style={{
                        fontSize: 0.2,
                        fontWeight: '400',
                        textAlign: 'center',
                        color: "#FFFFFF"
                    }}>
                        {this.props.text}
                    </Text>
                </VrButton>
            </Animated.View>
        )
    }
}

module.exports = Button;

