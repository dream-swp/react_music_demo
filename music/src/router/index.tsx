import { lazy } from 'react'
import { type RouteObject } from 'react-router'
import { Navigate } from 'react-router'

const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))

const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />
    },
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
                element: <Navigate to="/discover/recommend" />
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            },

            {
                path: '/discover/artist',
                element: <Artist />
            },
            {
                path: '/discover/album',
                element: <Album />
            }
        ]
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
