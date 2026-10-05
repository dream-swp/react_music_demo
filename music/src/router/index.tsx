// import {} from 'react-router'

import { type RouteObject } from 'react-router'
import { Navigate } from 'react-router'

import Discover from '@/views/discover'
import Focus from '@/views/focus'
import Mine from '@/views/mine'
import Download from '@/views/download'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />
    },
    {
        path: '/discover',
        element: <Discover />
    },
    {
        path: '/mine',
        element: <Mine />
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/download',
        element: <Download />
    }
]

export default routes
