import { memo, useState } from "react";
import "./style.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaUser,
  FaInbox,
  FaCartShopping,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTER } from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Cửa Hàng",
      path: ROUTER.USER.PRODUCTS,
    },
    {
      name: "Sản Phẩm",
      path: "",
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Thức ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "Bài Viết",
      path: "",
    },
    {
      name: "Liên Hệ",
      path: "",
    },
  ]);
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
          <div className="col-xl-3 col-lg-3">
            <div className="header__logo">
              <h1>VEGETABLESHOP</h1>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <nav className="header__menu">
              <ul>
                {/* load dữ liệu lên menu */}
                {menus?.map((item, menukey) => (
                  <li key={menukey} className={menukey === 0 ? "active" : ""}>
                    <Link to={item?.path}>{item?.name}</Link>
                    {item.child && (
                      <ul className="header__menu_dropdown">
                        {item.child.map((itemChild, keyChild) => (
                          <li key={`${menukey}-${keyChild}`}>
                            <Link to={itemChild?.path}>{itemChild?.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3 col-lg-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formatter(1030000)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <FaCartShopping />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
