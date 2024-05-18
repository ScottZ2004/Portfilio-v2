import "./globals.scss";
import Home from "@/pages/home/Home";
import logo from "&/images/logo/logo_scott_1 klein.png"
export default function RootLayout() {
  return (
    <html lang="en">
    <head>
        <title>Scott Zico</title>
        <link rel="icon" type="image/png" href={logo.src}/>
    </head>

    <body>
      <Home/>
    </body>
    </html>
  );
}
