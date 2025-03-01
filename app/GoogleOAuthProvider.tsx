// components/GoogleOAuthProvider.js
"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleProvider = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId='777554934510-v7bp08aus10ltlsd9hll4j0htdnfoo4k.apps.googleusercontent.com'>
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleProvider;
