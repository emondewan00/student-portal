
const Footer = () => {
  return (
    <div className="bg-gray-800  ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-white gap-x-2 py-14 px-4">
        <div className="text-gray-300">
          <h2 className="font-serif text-2xl italic text-white">EduSyncZone</h2>
          <p className="mt-3 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias
            nostrum natus saepe? Corrupti obcaecati error, sunt quis debitis
            voluptatum.
          </p>
          <p>+88017xxxxxxxx</p>
          <p>exmple@gmail.com</p>
        </div>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
