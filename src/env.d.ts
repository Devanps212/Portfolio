/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAIL_JS_API_SERVICE: string;
    readonly VITE_EMAIL_JS_PUBLIC_KEY: string;
    readonly VITE_EMAIL_JS_TEMPLATE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  