import Navbar from "@components/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Daystory",
  description: "하루 이야기",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
