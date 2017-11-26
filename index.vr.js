import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';
import axios from 'react-native-axios';

import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';
import VideoPlayer from './components/scenes/VideoPlayer';


export default class VrCinema extends React.Component {

    constructor() {
        super();
        this.state = {
            previews: "",
            IDs: ""
        };
    }

    componentWillMount() {
        axios.get('https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=1c2wk8qc6d0h2s6cpz09fwstxko5o2')
            .then(response => {
                console.log(response);
                this.gatherPreviews(response);
                this.gatherStreamIDs(response);
            })
            .catch(e => {
                console.log(error);
            });
    }

    gatherPreviews(response) {
        const previews = response.data.featured.map(function (feat) {
            return feat.stream.preview.large;
        });
        this.setState({previews: previews});
        //console.log(previews);
    }

    gatherStreamIDs(response) {
        const IDs = response.data.featured.map(function(feat) {
            return feat.stream._id;
        });
        console.log(IDs);

        //this.setState({IDs: IDs});
    }

    render() {
        return (
            <View>
                {/*<TitleScene showButton={true} text={"Watch a Video"}/>*/}
                <Dashboard
                    previews={this.state.previews}
                    showButton={false}
                    text={"Select Environment"}/>
                {/*<VideoPlayer showButton={true} text={"Back to Main"}/>*/}
            </View>
        );
    }
};

AppRegistry.registerComponent('VrCinema', () => VrCinema);
