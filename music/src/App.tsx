import { memo, Suspense } from 'react'
import { useRoutes } from 'react-router'

import routes from '@/router'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const App = memo(() => {
    return (
        <div className="App">
            <AppHeader />
            <Suspense fallback="loading...">
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
            <AppFooter />
        </div>
    )
})
export default App
