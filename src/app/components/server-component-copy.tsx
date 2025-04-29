import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  // Серверна фукція (щоб компонент 100% був серверним). Якщо Серверний компонент не містить серверних функцій, то він стає Клєнтським
  // console.log(headers().get('user-agent'));

  // console.log('Server Component Copy');
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
