import React from 'react';
import {
    Text,
    View,
    VrButton,
    //Animated
} from 'react-vr';

class Button extends React.Component {
    render() {
        return (
            <View style={{
                margin: 0.1,
                height: 0.3,
                backgroundColor: '#bb13f7',
                borderRadius: 0.1}}>
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
            </View>
        )
    }
}

module.exports = Button;

