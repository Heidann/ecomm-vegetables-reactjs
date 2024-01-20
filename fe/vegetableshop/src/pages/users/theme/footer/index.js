import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__about">
              <div className="footer__about_logo">VEGETABLESHOP</div>
              <ul>
                <li>Địa chỉ: Ấp mới 2, Mỹ Hạnh Nam</li>
                <li>Điện thoại: 0948-XXX-XXX</li>
                <li>Email: dang@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to={""}>Liên hệ</Link>
                </li>
                <li>
                  <Link to={""}>Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to={""}>Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={""}>Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to={""}>Giỏ hàng</Link>
                </li>
                <li>
                  <Link to={""}>Danh sách yêu thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-6 col-xs-12">
            <div className="footer__widget">
              <h6>Khuyến mãi và ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="Nhập email của bạn" />
                  <button type="submit" className="button-submit">
                    Đăng Ký
                  </button>
                </div>
                <div className="footer__widget_social">
                  <div>
                    <FaFacebookF />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
