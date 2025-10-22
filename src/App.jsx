import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
