import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail/:id" element={<ProductDetailPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
