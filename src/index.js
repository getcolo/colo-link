import React, {useState} from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const PROVIDER_TO_AUTHORIZE_URL = {
  'slack': 'https://slack.com/oauth/v2/authorize',
  'google': 'https://accounts.google.com/o/oauth2/v2/auth'
}

export const ColoLink = ({ coloApiKey='', userId, disabled=false, integration, style, buttonText, clientId, redirectUrl, scope }) => {
  const [isLoading, setIsLoading] = useState(false)  
  let text = "Link Account"
    if(integration === "slack") {
      text = "Link Slack Account"
    } else if(integration === "google") {
      text = "Link Google Account"      
    }
    
    // buttonText overrides everything else
    if(buttonText !== undefined) {
      text = buttonText
    }

    const constructSlackAuthUrl = (state, clientId, redirectUrl, scope) => {
      return `${PROVIDER_TO_AUTHORIZE_URL['slack']}?state=${state}&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUrl}`
    }

    const constructGoogleAuthUrl = (state, client_id, redirect_url, scope) => {
      return `${PROVIDER_TO_AUTHORIZE_URL['google']}?state=${state}&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_url}&response_type=code&access_type=online`
    }
    
    const getFullAuthUrl = (apiKey, userId, integration, redirectUrl, clientId, scope) => {
      setIsLoading(true)
      let authUrl = ''    
      if(apiKey !== '' && apiKey !== undefined && apiKey !== null) {
        // colo service is being used, so invoke colo
        console.log('colo invoked!')
      } else {
        const state = userId
        switch(integration){
          case 'slack':
            authUrl = constructSlackAuthUrl(state, clientId, redirectUrl, scope)
            break
          case 'google':
            authUrl = constructGoogleAuthUrl(state, clientId, redirectUrl, scope)
            break
          default:
            break
        }
      }
      return authUrl
    }

    return (
      <button 
        style={style}
        disabled={disabled || isLoading}
        onClick={() => {window.location.href = getFullAuthUrl(coloApiKey, userId, integration, redirectUrl, clientId, scope )}}>
        {isLoading ? 'Linking...' : text}
      </button>
    )
}

export default ColoLink;