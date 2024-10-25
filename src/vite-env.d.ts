/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_TEST_VARIABLE: string;
    // Otras variables que hayas definido
  };
  
  type ImportMeta = {
    readonly env: ImportMetaEnv;
  };
  