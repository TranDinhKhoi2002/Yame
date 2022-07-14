import { compareSync, hash } from "bcryptjs";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import * as request from "../../utils/request";

function Login(props) {
  const [loginWithPhoneNumber, setLoginWithPhoneNumber] = useState(true);
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    // const hashedPassword = await hash(passwordInputRef.current.value, 12);
    // console.log(compareSync(passwordInputRef.current.value, hashedPassword));

    const isValid = await request.checkValidUser(
      userNameInputRef.current.value,
      passwordInputRef.current.value
    );

    console.log(isValid);
  };

  const signupHandler = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <NavigationLayout title="Đăng nhập">
      <div className="w-[80%] md:w-[55%] mx-auto text-center">
        <h3 className="text-[1.75rem] font-medium leading-[1.2] mb-6">
          Đăng nhập với {loginWithPhoneNumber ? "số điện thoại" : "email"}
        </h3>
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
    </NavigationLayout>
  );
}

export default Login;
