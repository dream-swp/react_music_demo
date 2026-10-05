import { memo, Suspense } from 'react'
import { Link, useRoutes } from 'react-router'

import routes from '@/router'

const App = memo(() => {
    return (
        <div className="App">
            <div className="nva">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
            <Suspense fallback="loading...">
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
})
export default App
