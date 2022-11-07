import Navigation from "../components/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="linksquares">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body cz-shortcut-listen="true">
        <Navigation />
        <div className="prose">{children}</div>
      </body>
    </html>
  );
}
