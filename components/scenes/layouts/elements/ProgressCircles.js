import React from 'react';
import {
    View
} from 'react-vr';

//Element
class ProgressCircles extends React.Component {


    render() {
        return (
            <View>
                <View style={{
                    margin: 0.1,
                    width: 0.2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    {/*Circle1*/}
                    <View style={{
                        margin: 0.1,
                        width: 0.1,
                        borderRadius: 0.5,
                        height: 0.1,
                        // backgroundColor: this.props.color1,
                        backgroundColor: this.props.color1
                    }}>
                    </View>

                    {/*Circle2*/}
                    <View style={{
                        margin: 0.1,
                        width: 0.1,
                        borderRadius: 0.5,
                        height: 0.1,
                        // backgroundColor: this.props.color2,
                        backgroundColor: this.props.color2
                    }}>
                    </View>

                </View>
            </View>
        )
    }
}

module.exports = ProgressCircles;
