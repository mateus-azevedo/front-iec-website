// These styles apply to every route in the application
import './globals.css'

import { Header } from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        {/* Enter with footer UI here */}
      </body>
    </html>
  );
}
