export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Enter with header UI here */}
        <main>{children}</main>
        {/* Enter with footer UI here */}
      </body>
    </html>
  );
}
