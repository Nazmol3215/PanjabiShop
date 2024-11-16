import React from "react";
// import "./Styles.css"; // Create a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-hotline">
          <span role="img" aria-label="phone">
            📞
          </span>{" "}
          01965 666 777
        </p>
        <p className="footer-order-now">
          <strong>Order Now</strong> বাটনে ক্লিক করুন, অথবা কল দিন। <br />
          আমাদের সকল পাঞ্জাবি দেখতে{" "}
          <a href="#" className="footer-link">
            ক্লিক করুন
          </a>
        </p>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Dr Nowab Ali Tower, 2nd Floor, Shop-201</p>
        <p>24 Purana Paltan, Dhaka-1000</p>
        <p>📞 01965 666 777</p>
        <p>📧 smartpanjabishopbd@gmail.com</p>
      </div>
      {/* <div className="footer-payment">
        <h4>Payment Option</h4>
        <div className="payment-icons">
          <img src="/path/to/bkash.png" alt="Bkash" />
          <img src="/path/to/nagad.png" alt="Nagad" />
          <img src="/path/to/rocket.png" alt="Rocket" />
          <img src="/path/to/dbbl-nexus.png" alt="DBBL Nexus" />
          <img src="/path/to/visa.png" alt="Visa" />
          <img src="/path/to/mastercard.png" alt="MasterCard" />
        </div>
      </div> */}
      {/* <div className="footer-courier">
        <h4>Courier Partner</h4>
        <div className="courier-icons">
          <img src="/path/to/courier1.png" alt="Courier 1" />
          <img src="/path/to/courier2.png" alt="Courier 2" />
          <img src="/path/to/courier3.png" alt="Courier 3" />
          <img src="/path/to/courier4.png" alt="Courier 4" />
        </div>
      </div> */}
      <div className="footer-bottom">
        <p>
          All Rights Reserved By{" "}
          <a href="#" className="footer-link">
            Smart Panjabi Shop
          </a>
        </p>
        <p>
          Development By <a href="#">Abu Musa</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
