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
  FaBars,
  FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTER } from "utils/router";

const Header = () => {
  // data menu
  const [menus] = useState([
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
  // data categries
  const [isShowCategories, setShowCategories] = useState(true);
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

      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories">
            <div
              className="hero__categories__all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <FaBars />
              Danh sách sản Phẩm
            </div>

            <ul className={isShowCategories ? "" : "hidden"}>
              <li>
                <Link to={"#"}>Thịt tươi</Link>
              </li>
              <li>
                <Link to={"#"}>Rau củ</Link>
              </li>{" "}
              <li>
                <Link to={"#"}>Trái cây</Link>
              </li>{" "}
              <li>
                <Link to={"#"}>Hải sản</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 hero__search_container">
            <div className="hero__search">
              <div className="hero__search__form">
                <form>
                  <input
                    type=""
                    name=""
                    value={""}
                    placeholder="Bạn đang tìm gì?"
                  />
                  <button type="submit">Tìm kiếm</button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <FaPhone />
                </div>
                <div className="hero__search__phone__text">
                  <p>0948.XXX.XXX</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero__item">
              <div className="hero__text">
                <span>Trái cây tươi</span>
                <h2>
                  Rau quả <br />
                  sạch 100%
                </h2>
                <p>Miễn phí giao hàng tận nơi</p>
                <Link to={""} className="primary-btn">
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
