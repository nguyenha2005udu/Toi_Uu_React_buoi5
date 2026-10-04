/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPTIMIZED: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}