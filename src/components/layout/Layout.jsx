
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="grow">
        {children} {/* Aquí aparece el contenido de la página */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
