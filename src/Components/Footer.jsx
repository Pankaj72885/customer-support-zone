const Footer = () => {
  return (
    <div className="px-8 md:px-20 bg-neutral text-neutral-content">
      <footer className="footer sm:footer-horizontal  py-8 md:py-20 ">
        <aside>
          <h1 className="font-bold text-2xl">CS — Ticket System</h1>
          <p className="max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">@CS — Ticket System</a>
          <a className="link link-hover">support@cst.com</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center px-20 py-5 border-t border-gray-900">
        <aside className="">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
