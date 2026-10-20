import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App'
import store from '@/store'
import theme from '@/assets/theme'

createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </Provider>
    // </StrictMode>
)
