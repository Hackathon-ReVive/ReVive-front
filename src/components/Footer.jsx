import React from "react";

function Footer() {
  return (
    <footer className="w-full max-w-[1443px] bg-emerald-50 text-emerald-900 font-['Fira_Sans'] overflow-hidden mx-auto px-4 py-6">
      <div className="w-full max-w-[1403px] mx-auto">
        <div className="w-full h-px bg-emerald-900"></div>
        <div className="flex flex-col md:flex-row justify-between items-start mt-4">
          <p className="text-sm font-normal leading-snug">
            © 2025 ReVive. Todos los derechos reservados.
          </p>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-2 md:mt-0">
            <li className="text-sm font-normal leading-snug">
              Política de privacidad
            </li>
            <li className="text-sm font-normal leading-snug">
              Términos de servicio
            </li>
            <li className="text-sm font-normal leading-snug">
              Preferencia de Cookies
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
