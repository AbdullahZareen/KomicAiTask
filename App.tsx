import { LogBox } from 'react-native'
import React from 'react'
import MediaManagementScreenIndex from './src/screens/media-management/MediaManagementScreenIndex'

// Disable all logbox notifications
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <MediaManagementScreenIndex />
  )
}

export default App
