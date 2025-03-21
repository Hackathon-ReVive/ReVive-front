import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <section className="bg-emerald-900 p-6 sm:p-10 w-full flex flex-col md:flex-row items-center">
      <div className="flex flex-col justify-center items-start md:w-1/2 gap-6">
        <div className="self-stretch justify-start text-emerald-100 text-[40px] sm:text-[50px] lg:text-[64px] font-extrabold font-[Playfair_Display] leading-tight sm:leading-[56px] lg:leading-[69.12px]">
          Explora nuestros productos
        </div>
        <button
          onClick={handleButtonClick}
          className="w-[300px] sm:w-[360px] h-[50px] sm:h-[57px] max-w-[360px] px-4 sm:px-6 py-3 sm:py-4 bg-lime-600 rounded-lg flex justify-center items-center hover:bg-lime-500 hover:scale-105 transition-transform cursor-pointer"
        >
          <p className="text-center text-emerald-50 text-base sm:text-lg font-normal font-[Fira_Sans] leading-[24px] sm:leading-[27px]">
            Empieza ahora
          </p>
        </button>
      </div>
      <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
        <img
          className="max-w-full h-auto rounded-lg"
          src="/assets/banner-image.png"
          alt="foto-persona-trabajando-con-su-portatil"
        />
      </div>
    </section>
  );
}

export default Banner;
