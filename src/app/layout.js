import "./globals.scss";
import logo from "&/images/logo/logo_scott_1 klein.png";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Scott Zico</title>
        <link rel="icon" type="image/png" href={logo.src}/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
