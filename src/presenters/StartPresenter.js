// src/presenters/StartPresenter.js
import { useEffect, useState } from 'react';
import spotifyAuthUrl, { generateSpotifyString } from '../api/spotifyAuth';
import StartView from '../views/StartView';

import { connect } from 'react-redux';
import authActions from '../state/auth/authActions';

function StartPresenter(props){
    const [spotifyString, setSpotifyString] = useState(null);

    useEffect(function(){
        const randomString = generateSpotifyString();
        setSpotifyString(randomString);
        props.setSpotifyState(randomString);
    }, []);

    return <StartView loginUrl={`${spotifyAuthUrl}&state=${spotifyString}`} />;
}

const mapDispatchToProps = {
    setSpotifyState: authActions.setSpotifyState,
}
export default connect(null, mapDispatchToProps)(StartPresenter);