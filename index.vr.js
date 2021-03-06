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
            IDs: "",
            selectedStreamID: "",
            selectedEnv: ""
        };
    }

    captureSelection(stage, value) {
        switch (stage) {
            case 1:
                this.setState({selectedStreamID: value});
                break;
            case 2:
                this.setState({selectedEnv: value});
                break;
        }
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
        console.log(previews);
    }

    gatherStreamIDs(response) {
        const IDs = response.data.featured.map(function(feat) {
            return feat.stream._id;
        });
        this.setState({IDs: IDs});
        console.log(IDs);
    }

    render() {
        return (
            <View>
                {/*<TitleScene showButton={true} text={"Watch a Video"}/>*/}
                <Dashboard
                    captureSelection={this.captureSelection.bind(this)}
                    previews={this.state.previews}
                    showButton={false}
                    text={"Select Environment"}
                />
                {/*<VideoPlayer*/}
                    {/*streamID={this.state.selectedStreamID}*/}
                    {/*env={this.state.selectedEnv}*/}
                    {/*showButton={true}*/}
                    {/*text={"Back to Main"}*/}
                {/*/>*/}
            </View>
        );
    }
};

AppRegistry.registerComponent('VrCinema', () => VrCinema);
