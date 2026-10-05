/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    // others ...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
