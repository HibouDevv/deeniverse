import React from 'react';

// src/components/Layout.jsx
function Layout({ children }) {
  return (
    <div className="container mx-auto px-4 min-h-screen">
      {children}
    </div>
  );
}

export default Layout;
