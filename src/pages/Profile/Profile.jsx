import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie"; // For cookie management
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import style from "../Profile/Profile.module.css";
import { UserContext } from "../../components/ContextAPIs/Users/UserContext";
import supabase from "../../supabase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function Profile() {
  const [cookie, , removeCookie] = useCookies(["cookie-user"]);
  const { emptyCart } = useCart();
  const { emptyWishlist } = useWishlist();
  const { users } = useContext(UserContext);
  const user = users?.find((item) => {
    return item.token === cookie["cookie-user"];
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      setFormData({
        username: user?.username,
        email: user?.email,
        password: user?.password,
      });
    }
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("users")
      .update({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .eq("id", user?.id)
      .select();
    window.location.reload();
  };
  console.log(formData);
  const handleLogout = () => {
    const userID = cookie["cookie-user"]?.id;
    removeCookie("cookie-user");
    emptyCart();
    emptyWishlist();
    window.location.reload();
    toast.success("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <div className={style.userDetails}>
          <div className={style.text}>User details</div>
          <div className={style.usernameText}>
            <p>Username:</p> <span>{user?.username}</span>
          </div>
          <div className={style.emailText}>
            <p>Email:</p> <span>{user?.email}</span>
          </div>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.name}>
            <label for="username">User Name</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>

          <div className={style.email}>
            <label for="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div className={style.message}>
            <label for="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className={style.btnContainer}>
            <button type="submit" className={style.btn}>
              Update
            </button>
          </div>
          <div className={style.btnContainer}>
            <div onClick={handleLogout} className={style.btn}>
              Log Out
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
