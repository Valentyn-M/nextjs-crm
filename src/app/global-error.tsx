'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <div>
          <p>Something globally went wrong.</p>
        </div>
      </body>
    </html>
  );
}
