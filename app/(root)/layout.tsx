import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="wrapper flex-1 px-80 py-10">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
