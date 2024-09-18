/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly EMAIL_JS_API_SERVICE: string;
    readonly EMAIL_JS_PUBLIC_KEY: string;
    readonly EMAIL_JS_TEMPLATE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  