import Navigation from "./navigation";
import "./globals.css";
import QueryWrapper from "./components/queryWrapper";

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
        <div className="prose">
          <QueryWrapper>{children}</QueryWrapper>
        </div>
      </body>
    </html>
  );
}
