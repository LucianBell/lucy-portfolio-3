import "./globals.css";

export const metadata = {
  title: "Lucian Bellini - Software Engineer",
  description: "An amazing portfolio of an amazing developer",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" fill-new-black" lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
