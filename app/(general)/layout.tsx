import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col text-center p-48 text-6xl">
        <h1 className="mb-5">Hello!!</h1>
        {children}
      </main>
    </>
  );
}
