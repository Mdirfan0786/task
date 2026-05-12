import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

// ================= Lazy Imports =================
const Home = lazy(() => import("./pages/Home/Home"));

const About = lazy(() => import("./pages/About/About"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
