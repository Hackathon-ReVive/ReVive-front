import TeamCard from "../components/TeamCard";

const AboutUs = () => {
  const profiles = [
    {
      name: "Karina Lorenzo",
      role: "Diseñadora y Desarrolladora Frontend",
      image: "public/assets/img/Karina_1.jpg",
      linkedin: "https://www.linkedin.com/in/karina-lorenzo/",
    },
    {
      name: "Lanny Rivero",
      role: "Testing QA y Fundadora",
      image: "public/assets/img/Lanny.jpg",
      linkedin: "https://www.linkedin.com/in/lanny-rivero/",
    },
    {
      name: "Paloma Babot",
      role: "CEO Desarrolladora Web Fullstack",
      image: "public/assets/img/Paloma.jpg",
      linkedin: "https://www.linkedin.com/in/palomababot/",
    },
    {
      name: "Kat Leverton",
      role: "CEO y Desarrolladora Web",
      image: "public/assets/img/Kat.jpg",
      linkedin: "https://www.linkedin.com/in/kat-leverton/",
    },
    {
      name: "Ángel Miguel C. Aragón",
      role: "Desarrollador Web Fullstack",
      image: "public/assets/img/Ángel.jpg",
      linkedin: "https://www.linkedin.com/in/ángel-aragón/",
    },
    {
      name: "Santino Vigna",
      role: "Cloud Engineer",
      image: "public/assets/img/Santino.jpg",
      linkedin: "https://www.linkedin.com/in/santinovignatiburzi/",
    },
    {
      name: "Anna Nepyivoda",
      role: "Desarrolladora Web",
      image: "public/assets/img/Anna.jpg",
      linkedin: "https://www.linkedin.com/in/anna-nepyivoda",
    },
  ];

  return (
    <section className="p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col gap-10 justify-center items-center bg-emerald-50">
      <div className="text-center max-w-4xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[Playfair_Display] text-emerald-900 leading-tight">
          Sobre nosotros
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-emerald-600 leading-relaxed">
          Creemos que las cosas merecen más de una vida. Somos el punto de
          encuentro para quienes prefieren reutilizar en lugar de desechar, para
          los que ven valor donde otros ven lo viejo, y para los que entienden
          que cada compra es una elección con impacto. Aquí puedes encontrar
          tesoros únicos, darle una segunda oportunidad a lo que ya no usas y
          formar parte de un consumo más inteligente y sostenible. Porque lo que
          ya no necesitas, puede ser justo lo que alguien más está buscando.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {profiles.map((profile, index) => (
          <TeamCard
            key={index}
            name={profile.name}
            role={profile.role}
            image={profile.image}
            linkedin={profile.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
