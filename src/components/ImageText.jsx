function ImageText() {
  return (
    <section className="relative">
      <img
        src="/assets/text-image.png"
        className="z-0 w-full opacity-75"
        alt="foto estética de un salón con vista atractiva"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[1096px] text-center justify-start text-white text-7xl font-extrabold font-[Playfair_Display] leading-[77.76px]">
        Nuestra misión es crear una cultura que le da una segunda vida a los
        productos
      </div>
    </section>
  );
}

export default ImageText;
