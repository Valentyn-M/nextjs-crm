import MainLink from '@/app/components/main-link';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-full">
      <header className="bg-gray-900 text-white font-semibold text-xl min-h-18 px-4 py-4 flex items-center justify-center">
        <div>CRM for Vendors</div>
      </header>
      <main className="grow-1 p-4 text-center">
        <h1 className="text-3xl font-semibold mb-3">Wellcome!</h1>
        <p className="text-lg mb-8">
          This CRM application is aimed at optimizing supplier information
          management
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <MainLink
            pathname="/dashboard"
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Go to Dashboard
          </MainLink>
          <MainLink
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Go to Companies
          </MainLink>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-lg min-h-18 px-4 py-4 flex items-center justify-center">
        CRM | Built with Next.js | {currentYear}
      </footer>
    </div>
  );
}
