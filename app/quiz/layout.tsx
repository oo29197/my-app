export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`antialiased pt-4 pb-16 bg-hero bg-cover h-screen overflow-scroll`}
    >
      {children}
    </main>
  );
}
