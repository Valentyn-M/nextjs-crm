import React from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';
import DeleteCompanyButton from '@/app/components/delete-company-button';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar
      action={
        <>
          <AddPromotionButton companyId={params.id} />
          <DeleteCompanyButton companyId={params.id} />
        </>
      }
    >
      <SearchInput />
    </Toolbar>
  );
}
