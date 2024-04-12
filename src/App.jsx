import NavBar from "./layouts/NavBar";
import Contacto from "./pages/contacto";
import Inicio from "./pages/inicio";
import Products from "./pages/products";

export default function App() {
    return (
        <div className="m-0 p-0  font-mono 
        light:bg-gradient-to-r from-white to-sky-100 
        dark:bg-gradient-to-r from-sky1000 to-sky1500">
            <NavBar />
            <Inicio />
            <Products />
            <Contacto />
        </div>
    );
}