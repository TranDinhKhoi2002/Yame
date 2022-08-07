import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  HidePasswordIcon,
  ShowPasswordIcon,
} from "../../components/Icons/Icons";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet";
import * as request from "../../utils/request";

function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const isLoggedIn = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    }

    const getUser = async () => {
      setIsLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
      const existingUser = await request.getExistingUser(user.userName);
      setUser(existingUser);
      setIsLoading(false);
    };

    getUser();
  }, [isLoggedIn, navigate]);

  return (
    <NavigationLayout>
      <Helmet>
        <title>Tài Khoản</title>
      </Helmet>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className="w-[80%] md:w-[55%] mx-auto my-12">
          <h3 className="text-[1.75rem] text-center font-medium leading-[1.2] mb-6">
            Thông tin tài khoản
          </h3>
          <div>
            <div className="grid grid-cols-3 my-5">
              <span className="col-span-1">Họ tên:</span>
              <p className="col-span-2 font-normal">{user.displayName}</p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <span className="col-span-1">Tên đăng nhập:</span>
              <p className="col-span-2 font-normal">{user.userName}</p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <span className="col-span-1">Mật khẩu:</span>
              <p className="col-span-2 font-normal flex items-center">
                {!showPassword
                  ? "**********"
                  : JSON.parse(localStorage.getItem("user")).password}
                {showPassword && (
                  <span onClick={() => setShowPassword(false)}>
                    <ShowPasswordIcon className="ml-8" />
                  </span>
                )}
                {!showPassword && (
                  <span onClick={() => setShowPassword(true)}>
                    <HidePasswordIcon className="ml-8" />
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </NavigationLayout>
  );
}

export default Account;
