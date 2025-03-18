import banner from "./../assets/banner-image.png";

function Banner() {
    return (
        <section className="bg-emerald-900 p-10 w-full flex flex-col md:flex-row">
            <div className="p-10 flex flex-col justify-center align-start md:m-0 md:w-1/2">
                <h1 className = "text-[50px] text-emerald-100 font-['Playfair_Display']">
                    Explora nuestros productos
                </h1>
                <button className="flex align-center">
                    <p>
                        Empieza ahora
                    </p>
                </button>
            </div>
            <img src={banner} alt="foto-persona-trabajando-con-su-portatil">
            </img>
        </section>
    );
}

export default Banner