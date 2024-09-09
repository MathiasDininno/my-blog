import React, { useEffect, useState } from 'react';
import './Splash.css'; // Asegúrate de crear este archivo para los estilos

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de la aplicación
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta el tiempo según necesites

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? (
      <div className="splash-screen">
        <h1>Hello and welcome</h1>
        <p>¡Loading...</p>
      </div>
    ) : (
      <div className="app-content">
        
      </div>
    )
  );
};

export default SplashScreen;