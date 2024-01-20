import { memo } from "react";
import "./style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaUser,
  FaInbox,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <FaInbox />
                  hello.gmail.com
                </li>
                <li>Miễn Phí Đơn Từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to="">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaUser />
                    <span>Đăng Nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">LOGO</div>
          <div className="col-xl-6 col-lg-6">MENUS</div>
          <div className="col-xl-3 col-lg-3">PHONE</div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
