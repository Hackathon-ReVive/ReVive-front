function ImageText() {
  return (
    <section className="relative">
      <img
        src="/assets/text-image.png"
        className="z-0 w-full opacity-75"
        alt="foto estética de un salón con vista atractiva"
      ></img>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center font-['Playfair_Display'] text-[15px] font-extrabold md:text-[40px] lg:text-[60px]">
        Nuestra misión es crear una cultura que le da una segunda vida a los
        productos
      </h1>
    </section>
  );
}

export default ImageText;
