import email from "../assets/social-icon/email.svg";
import facebook from "../assets/social-icon/fb.svg";
import linkedin from "../assets/social-icon/linkedin.svg";
import x from "../assets/social-icon/x.svg";
const Footer = () => {
  return (
    <footer className="px-8 md:px-20 bg-neutral text-neutral-content">
      <div className="footer sm:footer-horizontal  py-8 md:py-20 ">
        <aside>
          <h1 className="font-bold text-2xl text-white">CS — Ticket System</h1>
          <p className="max-w-88 text-justify text-[#A1A1AA] text-base md:leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white normal-case opacity-100  text-xl">
            Company
          </h6>
          <a className="link link-hover text-[#A1A1AA] text-base">About Us</a>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Our Mission
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Contact Saled
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white normal-case opacity-100  text-xl">
            Services
          </h6>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Products & Services
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Customer Stories
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Download Apps
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white normal-case opacity-100  text-xl">
            Information
          </h6>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Privacy Policy
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base">
            Terms & Conditions
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white normal-case opacity-100 text-xl">
            Social Links
          </h6>
          <a className="link link-hover text-[#A1A1AA] text-base flex gap-2">
            <img src={x} alt="" />
            @CS — Ticket System
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base flex gap-2">
            {" "}
            <img src={facebook} alt="" />
            @CS — Ticket System
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base flex gap-2">
            {" "}
            <img src={linkedin} alt="" />
            @CS — Ticket System
          </a>
          <a className="link link-hover text-[#A1A1AA] text-base flex gap-2">
            {" "}
            <img src={email} alt="" />
            support@cst.com
          </a>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center py-5 border-t border-[#E5E7EB]/20 ">
        <aside>
          <p className="text-base text-[#FAFAFA]">
            &copy; {new Date().getFullYear()} CS — Ticket System. All rights
            reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
