import Link from 'next/link';
import React from 'react';

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Could not find company</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
}
