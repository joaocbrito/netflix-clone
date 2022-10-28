export interface PublicRuntimeConfig {
  API_BASE_URL: string;
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  MESSAGING_SENDER: string;
  APP_ID: string;
}

export interface NextConfig {
  publicRuntimeConfig: PublicRuntimeConfig;
}
