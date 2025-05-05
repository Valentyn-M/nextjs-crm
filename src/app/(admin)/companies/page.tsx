import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyTable from '@/app/components/company-table';

export interface PageProps {}

export default async function Page({}: PageProps) {
  // Отримуємо queryClient
  const queryClient = getQueryClient();

  // Робимо завантаження компаній за допомогою функції prefetchQuery
  await queryClient.prefetchQuery({
    queryKey: ['companies'], // встановлюємо ключ
    // Функця, яка буде завантажувати дані
    // В цю функцію ми передаємо параметр, який визначає, що отримані дані не потрібно кешувати - сторінка стає динамічною, а не статичною при збірці
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  // Стейт із react-query перетворюється, що виконати гадратацію вже на клієнті та відновити їх кеш
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
