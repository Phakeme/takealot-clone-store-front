import TagManager from 'react-gtm-module'

export const initializeTagManager = () => {
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_KEY || '',
  }

  TagManager.initialize(tagManagerArgs)
}
