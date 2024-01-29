import "./globals.css";

export const metadata = {
  title: "Lucian Bellini - Data Scientist",
  description: "The portfolio of the only data scientist you need!",
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
    <html className=" bg-color-black text-white" lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body className=" bg-color-black text-white">{children}</body>
    </html>
  );
}
