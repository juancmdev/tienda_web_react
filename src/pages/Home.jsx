import { useState, useEffect } from "react";
import { Link } from "react-router";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { FcShipped } from "react-icons/fc";

//IMPORTACIONES DE SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//IMPORTAR LOS ESTILOS DE SWIPER
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  // Opcional: Seleccionar solo algunos productos para el carrusel
  const [featuredProducts, setFeaturedProducts] = useState([]);

  //Usamos useEffect para aleatorizar la lista SOLO UNA VEZ
  useEffect(() => {
    // Creamos una copia del array original para no modificarlo
    const shuffled = [...products].sort(() => 0.5 - Math.random()); // Método simple de aleatorización

    // Guardamos los primeros 8 productos aleatorios en el estado
    setFeaturedProducts(shuffled.slice(0, 8));
  }, []); // El array vacío [] asegura que esto se ejecute solo al montar el componente

  return (
    <>
      {/*Contenedor principal: Fondo claro y padding vertical grande*/}
      <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center py-10">
        <div className="container mx-auto text-center px-4">
          {/* Título Principal */}
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            El Aroma que Transforma tu Espacio
          </h1>

          {/* Subtítulo y Propuesta de Valor */}
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Descubre nuestra exclusiva colección de ambientadores premium,
            diseñados para crear atmósferas de calma y energía en tu hogar u
            oficina.
          </p>

          {/* 4. NUEVA SECCIÓN: CARRUSEL DE DESTACADOS */}
          <div className="container mx-auto py-10 px-4">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
              Productos Destacados
            </h2>

            <Swiper
              // Módulos que usaremos
              modules={[Navigation, Pagination, Autoplay]}
              // Configuración
              spaceBetween={30} // Espacio entre slides
              navigation={true} // Habilita las flechas de navegación
              pagination={{ clickable: true }} // Habilita los "puntos" de paginación
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              // Diseño Responsivo (Breakpoints)
              breakpoints={{
                // (xs) >= 0px
                0: {
                  slidesPerView: 1, // 1 producto en móvil
                },
                // sm >= 640px
                640: {
                  slidesPerView: 2, // 2 productos en tablet
                },
                // md >= 1024px
                1024: {
                  slidesPerView: 3, // 3 productos en desktop
                },
                // lg >= 1280px
                1280: {
                  slidesPerView: 4, // 4 productos en pantallas grandes
                },
              }}
              className="pb-14" // Padding-bottom para dejar espacio a la paginación
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  {/* Reutilizamos el ProductCard que ya creamos */}
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Llamada a la Acción (CTA) */}
          <Link
            to="/store"
            className="inline-block px-10 py-4 text-xl 
                     bg-indigo-600 text-white font-bold 
                     rounded-full shadow-xl 
                     hover:bg-indigo-700 hover:shadow-2xl 
                     transition duration-300 transform hover:scale-105"
          >
            Explora la Tienda Ahora &rarr;
          </Link>

          {/* Pequeño texto de confianza */}
          <p className="text-md font-bold text-gray-500 mt-6 flex items-center justify-center">
            <FcShipped className="text-3xl mr-2" />
            Envíos seguros a toda Colombia.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
