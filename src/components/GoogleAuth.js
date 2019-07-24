import React from 'react';

const CLIENT_ID = '701897124808-m3gprmdndvq61rqftkn8npcn0dmgb48i.apps.googleusercontent.com';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'email'
            })
        });
    }

    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;
