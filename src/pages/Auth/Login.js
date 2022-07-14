import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";
import * as request from "../../utils/request";
import { authActions } from "../../store/auth";

function Login(props) {
  const [loginWithPhoneNumber, setLoginWithPhoneNumber] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const isValid = await request.checkValidUser(
        userNameInputRef.current.value,
        passwordInputRef.current.value
      );

      if (isValid) {
        toast.success(
          <ToastifyMessage title="Đăng nhập" message="Đăng nhập thành công" />
        );
        dispatch(
          authActions.login({
            userName: userNameInputRef.current.value,
            password: passwordInputRef.current.value,
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
            <input
              ref={userNameInputRef}
              className="col-span-2 h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              minLength={10}
            />
          </div>
          <div className="grid grid-cols-3 mt-5">
            <label className="col-span-1" htmlFor="password">
              Mật khẩu
            </label>
            <input
              ref={passwordInputRef}
              className="col-span-2 h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="grid grid-cols-3 mt-2">
            <span className="col-span-1"></span>
            <div className="col-span-2 text-left">
              <span className="text-[14px] font-normal hover:text-primary transition duration-150 cursor-pointer">
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
