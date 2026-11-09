export const metadata = {
  title: "Minha Receita",
  description: "Meu projeto Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
