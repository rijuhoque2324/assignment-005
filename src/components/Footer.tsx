import Logo from '../assets/logo-text.png'
const Footer = () => {
  return (
    <div className="border-t border-gray-200 bg-white mt-15">

      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-4">

        {/* =========================
            FOOTER TOP PART
        ========================== */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href=""><img className="h-10" src={Logo} alt="Dev Stack Logo" /></a>
            </div>


            {/* Description */}
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>


            {/* Social Links */}
            <div className="mt-6 flex items-center gap-5">

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* Product */}
          <div>

            <h3 className="text-sm font-bold uppercase text-gray-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="#home"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Projects
              </a>

            </div>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-sm font-bold uppercase text-gray-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="#about"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#careers"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Careers
              </a>

            </div>

          </div>


          {/* Legal */}
          <div>

            <h3 className="text-sm font-bold uppercase text-gray-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <a
                href="#privacy"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-sm text-gray-500 hover:text-pink-500"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            COPYRIGHT / BOTTOM PART
        ========================== */}
        <div className="mt-12 border-t border-gray-200 pt-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>


            {/* Bottom Links */}
            <div className="flex items-center gap-6">

              <a
                href="#privacy"
                className="text-sm text-gray-400 transition hover:text-pink-500"
              >
                Privacy
              </a>

              <a
                href="#terms"
                className="text-sm text-gray-400 transition hover:text-pink-500"
              >
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer;