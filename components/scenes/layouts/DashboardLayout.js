import  React from 'react';
import {
    View
} from 'react-vr';

import MenuButtons from './elements/MenuButtons';
import TileButtons from './elements/TitleButtons';
import ProgressCircles from './elements/ProgressCircles';
import Button from './elements/Button';

class DashnoardLayout extends React.Component {
    render() {
        return (
            <View>

                <View style ={{
                    width: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -3]}],
                    marginTop: -0.3
                }}>
                    <MenuButtons/>
                    <TileButtons/>
                    <ProgressCircles/>
                </View>

                <View style ={{
                    width: 5,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -3]}],
                    marginTop: -0.7
                }}>
                    <Button text={this.props.text}/>
                </View>

            </View>
        )
    }
}

module.exports = DashnoardLayout;