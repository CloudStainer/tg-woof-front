// src/app/page.tsx or src/pages/index.tsx
import Dashboard from "@/components/home/page";
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <main className="flex flex-col justify-start h-[100vh] w-screen">
      <Dashboard />
    </main>
  );
}

