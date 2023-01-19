import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main style={{ flexGrow: 1, display: "flex" }}>{children}</main>
      <Footer />
    </div>
  );
}
