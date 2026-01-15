import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="w-full items-center justify-center">
      {/* Divider */}
      <hr className="border-t-2 border-green-900/60" />

      <div className="bg-green-950 flex flex-col items-center justify-center gap-4 py-6">
        {/* Brand */}
        <span className="text-white text-2xl font-semibold tracking-wide">
          Clarice DM<span className="text-green-500">.</span>
        </span>

        {/* Social Medias */}
        <div className="flex gap-4">
          <Link
            to="/contact"
            aria-label="Instagram"
            className="opacity-85 hover:opacity-100 transition"
          >
            <img className="size-7" src="/instagram.svg" alt="Instagram" />
          </Link>

          <Link
            to="/contact"
            aria-label="WhatsApp"
            className="opacity-85 hover:opacity-100 transition"
          >
            <img className="size-7" src="/whatsapp.svg" alt="WhatsApp" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/80 mt-4">
          © {new Date().getFullYear()} — Made with ❤️ by Ronny
        </p>
      </div>
      <hr className="border-b-2 border-green-900" />
    </footer>
  )
}
