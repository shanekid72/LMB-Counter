import "@/styles/app.scss";

export const metadata = {
  title: "Lulu Money Business — Coming Soon",
  description: "Lulu Money Business is launching soon.",
  siteName: "Lulu Money Business",

  icons: {
    icon: "/favicon.png",
  },

  // TODO: confirm production URL before deploy
  metadataBase: new URL("https://lulumoneybusiness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
