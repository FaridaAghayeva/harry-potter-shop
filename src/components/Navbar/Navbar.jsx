import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { FaUser } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { Events } from "react-scroll";
import { UserContext } from "../../components/ContextAPIs/Users/UserContext";
import { ThemeContext } from "../ContextAPIs/Theme/Theme";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isVisible, setVisible] = useState(false);
  const [cookie] = useCookies("cookie-user");
  const [isSticky, setIsSticky] = useState(false);

  const { users } = useContext(UserContext);
  const user = users?.find((item) => {
    return item.token === cookie["cookie-user"];
  });

  function displayToggleMenu() {
    setVisible(!isVisible);
  }

  useEffect(() => {
    Events.scrollEvent.register("begin", () => setIsSticky(true));
    Events.scrollEvent.register("end", () => setIsSticky(false));

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const { totalUniqueItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  return (
    <header className={`${style.container}`}>
      <div
        className={
          darkMode === "light" ? style.loginPart : style.loginPartLight
        }
      >
        <div className={style.fanclub}>
          <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/hp_fan_club_logo_horizontal_dark.svg?v=31198702805312198181678387973" />
        </div>

        <div className={style.loginContainer}>
          {cookie["cookie-user"] !== undefined ? (
            <NavLink to="/profile">
              <div className={style.userIcon}>
                <p>Hello, {user?.username}</p>
                <FaUser />
              </div>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Registration</NavLink>
            </>
          )}
          {cookie["cookie-user"] === "83fd0571-a42b-4ea6-96b5-a940eda115e5" && (
            <NavLink to="/admin-panel">
              <div className={style.dashboard}>Dashboard</div>
            </NavLink>
          )}

          <img
            className={darkMode === "dark" ? style.moon : style.sun}
            src={
              darkMode === "dark"
                ? "https://harrypottershop.co.uk/cdn/shop/t/22/assets/moon_2x.png"
                : "https://harrypottershop.co.uk/cdn/shop/t/22/assets/sun_2x.png"
            }
            alt="theme toggle"
            onClick={toggleTheme}
          />
        </div>
      </div>

      <div
        className={
          darkMode === "light" ? style.itemsContainer : style.itemsContainer2
        }
      >
        <div className={style.logos}>
          <div
            onClick={displayToggleMenu}
            className={style.toggleIconContainer}
          >
            {isVisible ? (
              <div className={style.deleteIcon}></div>
            ) : (
              <div className={style.toggleIcon}></div>
            )}
          </div>
          <div className={style.cart2}>
            <NavLink to="/wishlist">
              <div className={style.wishlistcart2}>
                <div className={style.wishlistContainer2}>
                  <div className={style.totalWishlist2}>
                    <p>{totalWishlistItems !== 0 ? totalWishlistItems : 0}</p>
                  </div>
                  <div
                    className={
                      darkMode === "light"
                        ? style.wishlist2
                        : style.wishlist2Light
                    }
                  ></div>
                </div>
              </div>
            </NavLink>
            <div className={style.cartContainer2}>
              <NavLink to="/cart">
                <div className={style.totalCart2}>
                  <p>{totalUniqueItems !== 0 ? totalUniqueItems : 0}</p>
                </div>
                <div
                  className={
                    darkMode === "light" ? style.basket2 : style.basket2Light
                  }
                ></div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.items}>
          <div className={style.arrowleft}>
            <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/divider.svg" />
          </div>
          <div className={style.liItems}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive
                  ? {
                      fontWeight: "900",
                      textDecoration: "underline",
                    }
                  : {};
              }}
            >
              <span className={darkMode === "dark" ? style.darkSpan : ""}>
                Home
              </span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/about-us"
              style={({ isActive }) => {
                return isActive
                  ? { fontWeight: "900", textDecoration: "underline" }
                  : {};
              }}
            >
              <span className={darkMode === "dark" ? style.darkSpan : ""}>
                About Us
              </span>
            </NavLink>

            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return isActive
                  ? { fontWeight: "900", textDecoration: "underline" }
                  : {};
              }}
            >
              <span className={darkMode === "dark" ? style.darkSpan : ""}>
                Shop
              </span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>
            <NavLink
              to="/contact-us"
              style={({ isActive }) => {
                return isActive
                  ? { fontWeight: "900", textDecoration: "underline" }
                  : {};
              }}
            >
              <span className={darkMode === "dark" ? style.darkSpan : ""}>
                Contact Us
              </span>
            </NavLink>
            <span>
              <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/dot.svg" />
            </span>

            <div className={style.cart}>
              <NavLink to="/wishlist">
                <div className={style.wishlistcart}>
                  <div className={style.wishlistContainer}>
                    <div className={style.totalWishlist}>
                      <p>{totalWishlistItems !== 0 ? totalWishlistItems : 0}</p>
                    </div>
                    <div
                      className={
                        darkMode === "light"
                          ? style.wishlist
                          : style.wishlistLight
                      }
                    ></div>
                  </div>
                </div>
              </NavLink>
              <div className={style.cartContainer}>
                <NavLink to="/cart">
                  <div className={style.totalCart}>
                    <p>{totalUniqueItems !== 0 ? totalUniqueItems : 0}</p>
                  </div>
                  <div
                    className={
                      darkMode === "light" ? style.basket : style.basketLight
                    }
                  ></div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className={style.arrowright}>
            <img src="https://harrypottershop.co.uk/cdn/shop/t/22/assets/divider.svg" />
          </div>
        </div>
      </div>

      {isVisible && (
        <div className={style.toggleMenu}>
          <ToggleMenu isVisible={isVisible} setVisible={setVisible} />
        </div>
      )}
    </header>
  );
}
