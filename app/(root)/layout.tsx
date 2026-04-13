import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="wrapper flex-1 overflow-y-auto px-4 py-6 sm:px-8 md:px-16 lg:px-60 lg:py-10">{children}</main>
    </div>
  );
}
