import { Navbar, Footer } from "../Componets/Index";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />

      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
