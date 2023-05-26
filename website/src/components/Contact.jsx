/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact(props) {
  const {
    contact_title,
    contact_title1,
    contact_title2,
    contact_title3,
    contact_address,
  } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact row light" id="contact">
      <div className="col-12 our-courser-title">
        <h1 className="row-title text-center">{contact_title}</h1>
      </div>
      <div className="row our-courses-cards">
        <div
          className="col-lg-3 our-courses-card contact-card light"
          data-aos="fade-right"
        >
          <h1>{contact_title1}</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.83197950011754!2d-5.378656905836658!3d35.570698348938514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b430513c1d49b%3A0xb89db788faa1fb18!2z2YXYsdmD2LIg2KfZhNiq2YjYp9i12YQg2YTZhNi62KfYqiDZiNin2YTYr9i52YUg2KfZhNmF2K_Ysdiz2Yo!5e0!3m2!1sen!2sma!4v1685052186161!5m2!1sen!2sma"
            width="100%"
            height="60%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>{contact_address}</p>
        </div>
        <div
          className="col-lg-3 our-courses-card contact-card light"
          data-aos="fade-right"
        >
          <h1>{contact_title2}</h1>
          <div className="contact-numbers flex-column justify-content-center">
            <p>
              <WhatsAppIcon
                fontSize="2rem"
                style={{ color: " var(--main-orange)" }}
              ></WhatsAppIcon>{" "}
              06 44 34 00 95
            </p>
            <p>
              <LocalPhoneIcon
                fontSize="rem"
                style={{ color: " var(--main-orange)" }}
              ></LocalPhoneIcon>{" "}
              05 39 71 31 06
            </p>
          </div>
        </div>
        <div
          className="col-lg-3 our-courses-card contact-card light"
          data-aos="fade-right"
        >
          <h1>{contact_title3}</h1>
          <div className="contact-socials flex-column justify-content-center g-2">
            <a
              href="mailto:communicationcenter2007@gmail.com"
              className="mb-3 contact-social"
            >
              <EmailIcon fontSize="large"></EmailIcon>
            </a>
            <a
              href="https://www.instagram.com/communication_center2007/"
              className="mb-3 contact-social"
            >
              <InstagramIcon fontSize="large"></InstagramIcon>
            </a>
            <a
              href="https://web.facebook.com/MarkazNourAlIlem"
              className="mb-3 contact-social"
            >
              <FacebookIcon fontSize="large"></FacebookIcon>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p className="light text-center fw-bold">
          Copyright @Markaz Nour Al Ilem 2023-2024
        </p>
      </footer>
    </div>
  );
}
