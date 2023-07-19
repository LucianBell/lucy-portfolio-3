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
    <html className=" bg-black text-white" lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className=" bg-black text-white">{children}</body>
    </html>
  );
}
