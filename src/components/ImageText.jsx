function ImageText() {
  return (
    <section className="relative flex items-center justify-center">
      <img
        src="/assets/text-image.png"
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-75"
        alt="foto estética de un salón con vista atractiva"
      />
      <div className="relative z-10 max-w-[1096px] text-center text-white text-2xl md:text-4xl lg:text-7xl font-extrabold font-[Playfair_Display] px-4 py-8 lg:py-16 leading-tight lg:leading-[77.76px]">
        Nuestra misión es crear una cultura que le da una segunda vida a los
        productos
      </div>
    </section>
  );
}

export default ImageText;
