/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string;
  readonly VITE_API_URL: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
