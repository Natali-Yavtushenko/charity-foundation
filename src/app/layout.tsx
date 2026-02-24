import "./globals.css";
import Header from "../components/layout/Header";

export const metadata = {
  title: "Благодійний фонд «Серце в дії»",
  description: "Допомога полоненим, військовим та цивільним",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}