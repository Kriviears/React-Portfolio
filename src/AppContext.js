import React from 'react'

const AppContext = React.createContext({
    projects: [],
    setTab: () => {},
    chooseProject: () => {},
})

export default AppContext;