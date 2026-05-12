import { lazy, Suspense } from "react";
import Styles from "./App.module.css";

import { Routes, Route } from "react-router-dom";
import Loader from "./components/ui/Loader/Loader";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";

// ================= Lazy Imports =================
const Home = lazy(() => import("./pages/Home/Home"));

const About = lazy(() => import("./pages/About/About"));

export default function App() {
  return (
    <>
      <div className={Styles.app}>
        <Navbar />

        <main className={Styles.main}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
