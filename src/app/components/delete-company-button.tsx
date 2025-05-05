'use client';

import React from 'react';
import Button from '@/app/components/button';
import { deleteCompany } from '@/lib/api';
import { useRouter } from 'next/navigation';

export interface DeleteCompanyButtonProps {
  companyId: string;
}

export default function DeleteCompanyButton({
  companyId,
}: DeleteCompanyButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete this company?');
    if (!confirmed) return;

    try {
      await deleteCompany(companyId);
      router.push('/companies');
    } catch (error) {
      console.error('Failed to delete company', error);
      alert('Something went wrong while deleting.');
    }
  };

  return <Button onClick={handleDelete}>Delete company</Button>;
}
