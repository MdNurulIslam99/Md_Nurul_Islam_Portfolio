import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      {/* <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer> */}
      <footer className="footer sm:footer-horizontal footer-center bg-gray-300 text-base-content p-4">
        <aside>
          <p className="text-base">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <strong>MNI_DEVZONE</strong>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
