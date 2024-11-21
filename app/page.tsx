import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
export default function Home() {
  return (
  <div>
    <Navbar />
      <main>
        <h1>Bienvenido al Hotel Calacoto</h1>
      </main>
      <Footer />
  </div>
  );
}
