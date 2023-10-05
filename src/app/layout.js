import Providers from "@/redux/provider";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default Layout;
