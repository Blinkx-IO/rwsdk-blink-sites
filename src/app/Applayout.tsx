import type { LayoutProps } from 'rwsdk/router'
// import { Nav } from "@/app/components/Nav";

import { AuthProvider } from '@/app/components/AuthProvider';
import type { RequestInfo } from 'rwsdk/worker';
import type { AppContext } from '@/worker';


export function AppLayout({ children, requestInfo }: LayoutProps<RequestInfo<any, AppContext>>) {
  return (
    <AuthProvider>
      <main className='max-w-5xl mx-auto'>
        {children}
      </main>
    </AuthProvider>
  );
}


