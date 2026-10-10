/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    // others ...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

import type { AppTheme } from '@/assets/theme'
declare module '@emotion/react' {
    export interface Theme extends AppTheme {}
}
