import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";
import * as request from "../../utils/request";
import { authActions } from "../../store/auth";
import {
  checkValidEmail,
  checkValidVietNamPhoneNumber,
} from "../../utils/validate";

function Login(props) {
  const [loginWithPhoneNumber, setLoginWithPhoneNumber] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userNameValue, setUserNameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (
        loginWithPhoneNumber &&
        !checkValidVietNamPhoneNumber(userNameValue)
      ) {
        throw new Error("Số điện thoại không hợp lệ");
      }

      if (!loginWithPhoneNumber && !checkValidEmail(userNameValue)) {
        throw new Error("Email không hợp lệ");
      }

      const isValid = await request.checkValidUser(
        userNameValue,
        passwordValue
      );

      if (isValid) {
        toast.success(
          <ToastifyMessage title="Đăng nhập" message="Đăng nhập thành công" />
        );
        dispatch(
          authActions.login({
            userName: userNameValue,
            password: passwordValue,
          })
        );
        setIsLoading(false);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        throw new Error(
          "Điện thoại / Email hoặc Mật khẩu không đúng, vui lòng kiểm tra lại"
        );
      }
    } catch (err) {
      setIsLoading(false);
      toast.error(<ToastifyMessage title="Đăng nhập" message={err.message} />);
    }
  };

  const signupHandler = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const forgetPasswordHandler = () => {
    navigate("/forget-password");
  };

  return (
    <NavigationLayout title="Đăng nhập">
      <div className="w-[80%] md:w-[55%] mx-auto my-12">
        <h3 className="text-[1.75rem] text-center font-medium leading-[1.2] mb-6">
          Đăng nhập với {loginWithPhoneNumber ? "số điện thoại" : "email"}
        </h3>
        {isLoading && (
          <p className="text-center text-[#308f69] font-normal">
            Đang thực thi...
          </p>
        )}
        <form>
          <div className="grid grid-cols-3 my-5">
            <label className="col-span-1" htmlFor="phoneNumber">
              {loginWithPhoneNumber ? "Điện thoại" : "Email"}
            </label>
            <div className="col-span-2">
              <input
                onBlur={(e) => setUserNameValue(e.target.value)}
                className="w-full h-[43px] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                minLength={10}
              />
              {loginWithPhoneNumber &&
                userNameValue &&
                !checkValidVietNamPhoneNumber(userNameValue) && (
                  <label className="text-primary">
                    Số điện thoại không hợp lệ
                  </label>
                )}
              {!loginWithPhoneNumber &&
                userNameValue &&
                !checkValidEmail(userNameValue) && (
                  <label className="text-primary">Email không hợp lệ</label>
                )}
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5">
            <label className="col-span-1" htmlFor="password">
              Mật khẩu
            </label>
            <input
              onBlur={(e) => setPasswordValue(e.target.value)}
              className="col-span-2 h-[43px] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="grid grid-cols-3 mt-2">
            <span className="col-span-1"></span>
            <div className="col-span-2 text-left">
              <span
                onClick={forgetPasswordHandler}
                className="text-[14px] font-normal hover:text-primary transition duration-150 cursor-pointer"
              >
                Quên mật khẩu
              </span>
              <span className="text-[14px] mx-3">hoặc</span>
              <span
                onClick={() =>
                  setLoginWithPhoneNumber((prevState) => !prevState)
                }
                className="text-[14px] font-normal hover:text-primary transition duration-150 cursor-pointer"
              >
                Đăng nhập với {loginWithPhoneNumber ? "email" : "số điện thoại"}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5">
            <span className="col-span-1" />
            <div className="col-span-2 text-left">
              <button
                onClick={loginHandler}
                className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 uppercase transition duration-300 ease-in-out bg-blue rounded-[0.25rem] leading-normal border-[1px] border-solid border-blue hover:bg-darkBlue100 hover:border-darkBlue200"
              >
                Đăng nhập
              </button>
              <button
                onClick={signupHandler}
                className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 ml-3 uppercase transition duration-300 ease-in-out bg-gray rounded-[0.25rem] leading-normal border-[1px] border-solid border-gray hover:bg-darkGray100 hover:border-darkGray200"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={3000} limit={1} pauseOnFocusLoss={false} />
    </NavigationLayout>
  );
}

export default Login;
