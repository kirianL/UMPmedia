import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-ump-background text-ump-primary py-20 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col gap-16 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="relative w-40 h-12 block">
            <Image
              src="/LOGO-UMP.webp"
              alt="UMP Media"
              fill
              className="object-contain object-left invert"
            />
          </Link>
          <p className="text-ump-secondary text-sm max-w-xs">
            Estudio audiovisual independiente.
            <br />
            Creamos experiencias visuales que perduran.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <FooterLink href="/portfolio">Portafolio</FooterLink>
          <FooterLink href="/services">Servicios</FooterLink>
          <FooterLink href="/about">Nosotros</FooterLink>
          <FooterLink href="/contact">Contacto</FooterLink>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 text-sm text-ump-secondary">
          <span className="uppercase tracking-widest text-xs font-semibold text-ump-accent">
            Ubicación
          </span>
          <p>Limón, Costa Rica</p>

          <span className="uppercase tracking-widest text-xs font-semibold text-ump-accent mt-4">
            Social
          </span>
          <div className="flex gap-4">
            {/* TODO: Add Social Icons/Links */}
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-ump-secondary/50">
        <p>
          &copy; {new Date().getFullYear()} UMPmedia. Todos los derechos
          reservados.
        </p>
        <p>
          Desarrollado por{" "}
          <a
            href="https://kirian.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ump-accent transition-colors"
          >
            kirian.dev
          </a>{" "}
          de UMP.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-2xl md:text-3xl font-bold hover:text-ump-accent transition-colors tracking-tight"
    >
      {children}
    </Link>
  );
}
