import banner from "./../assets/banner-image.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function Banner() {
    const navigate = useNavigate();

    return (
        <section className="bg-emerald-900 p-10 w-full flex flex-col md:flex-row">
            <div className="p-10 flex flex-col justify-center align-start md:m-0 md:w-1/2">
                <h1 className = "text-[50px] text-emerald-100 font-['Playfair_Display']">
                    Explora nuestros productos
                </h1>
                <Button 
                    text="Empieza ahora"
                    bgColor="bg-lime-600"
                    txtColor="text-white"
                    className="mt-4 px-6 py-3 w-[250px]"
                />
            </div>
            <img src={banner} alt="foto-persona-trabajando-con-su-portatil">
            </img>
        </section>
    );
}

export default Banner