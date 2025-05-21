/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ACCESS_TOKEN_GITHUB: string
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}