import { memo } from 'react'
import { useRoutes } from 'react-router'

import routes from '@/router'
// import Home from './views/home'

const App = memo(() => {
    return <div className="App">{useRoutes(routes)}</div>
})
export default App
