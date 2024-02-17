import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { FaEye, FaCartShopping } from "react-icons/fa6";

import cat1Img from "assets/users/image/categories/cat-1.jpg";
import cat2Img from "assets/users/image/categories/cat-2.jpg";
import cat3Img from "assets/users/image/categories/cat-3.jpg";
import cat4Img from "assets/users/image/categories/cat-4.jpg";
import cat5Img from "assets/users/image/categories/cat-5.jpg";

import feature1Img from "assets/users/image/featured/feature-1.jpg";
import feature2Img from "assets/users/image/featured/feature-2.jpg";
import feature3Img from "assets/users/image/featured/feature-3.jpg";
import feature4Img from "assets/users/image/featured/feature-4.jpg";
import feature5Img from "assets/users/image/featured/feature-5.jpg";
import feature6Img from "assets/users/image/featured/feature-6.jpg";
import feature7Img from "assets/users/image/featured/feature-7.jpg";
import feature8Img from "assets/users/image/featured/feature-8.jpg";

import banner1 from "assets/users/image/banner/banner-1.jpg";
import banner2 from "assets/users/image/banner/banner-2.jpg";

import "./style.scss";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Cam tươi",
    },
    {
      bgImg: cat2Img,
      name: "Hoa quả",
    },
    {
      bgImg: cat3Img,
      name: "Rau củ",
    },
    {
      bgImg: cat4Img,
      name: "Sữa tươi",
    },
    {
      bgImg: cat5Img,
      name: "Thịt bò",
    },
  ];
  const featProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: feature1Img,
          name: "Thịt Bò",
          price: 200000,
        },
        {
          img: feature2Img,
          name: "Chuối",
          price: 20000,
        },
        {
          img: feature3Img,
          name: "Ổi",
          price: 15000,
        },
        {
          img: feature4Img,
          name: "Dưa Hấu",
          price: 10000,
        },
        {
          img: feature5Img,
          name: "Nho",
          price: 250000,
        },
        {
          img: feature6Img,
          name: "Bánh Mì",
          price: 25000,
        },
        {
          img: feature7Img,
          name: "Xoài",
          price: 40000,
        },
        {
          img: feature8Img,
          name: "Táo",
          price: 60000,
        },
      ],
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        {
          img: feature1Img,
          name: "Thịt bò nạt",
          price: 2000,
        },
      ],
    },
    fastFood: {
      title: "Thức Ăn Nhanh",
      products: [
        {
          img: feature6Img,
          name: "Bánh Mì",
          price: 25000,
        },
      ],
    },
    fruit: {
      title: "Trái Cây",
      products: [
        {
          img: feature2Img,
          name: "Chuối",
          price: 20000,
        },
        {
          img: feature3Img,
          name: "Ổi",
          price: 15000,
        },
        {
          img: feature4Img,
          name: "Dưa Hấu",
          price: 10000,
        },
        {
          img: feature5Img,
          name: "Nho",
          price: 250000,
        },
        {
          img: feature7Img,
          name: "Xoài",
          price: 40000,
        },
        {
          img: feature8Img,
          name: "Táo",
          price: 60000,
        },
      ],
    },
  };
  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      console.log(key, index);
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(
          <div key={j} className="col-lg-3">
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <FaEye />
                  </li>
                  <li>
                    <FaCartShopping />
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <Link to={""}>{item.name}</Link>
                </h6>
                <h5>{formatter(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(tabPanel);
    });

    return (
      <Tabs>
        <TabList>{tabList}</TabList>
        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };
  return (
    <>
      {/* Categories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url( ${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories End */}
      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản Phẩm Nổi Bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured End */}
      {/* Banner Begin */}

      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={banner1} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={banner2} alt="banner" />
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
};

export default memo(HomePage);
