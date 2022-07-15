import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";

function ForgetPassword(props) {
  const [userNameValue, setUserNameValue] = useState();
  const navigate = useNavigate();

  const signupHandler = () => {
    navigate("/signup");
  };

  const sendVerificationCodeHandler = () => {
    fetch(
      `http://localhost:4000/forget-password?recipient=${userNameValue}`
    ).catch((err) => console.log(err));
  };

  return (
    <NavigationLayout title="Quên mật khẩu">
      <div className="w-[80%] md:w-[55%] mx-auto my-12">
        {" "}
        <h3 className="text-[1.75rem] text-center font-medium leading-[1.2] mb-6">
          Quên mật khẩu
        </h3>
        <form>
          <div className="grid grid-cols-3 my-5">
            <label className="col-span-1" htmlFor="userName">
              Điện thoại / Email
            </label>
            <div className="col-span-2">
              <input
                onBlur={(e) => setUserNameValue(e.target.value)}
                className="w-full h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
                type="text"
                id="userName"
                name="userName"
                minLength={10}
              />
              <span
                onClick={sendVerificationCodeHandler}
                className="absolute ml-3 font-normal hover:text-primary transition duration-150 cursor-pointer"
              >
                Lấy mã
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5">
            <label className="col-span-1" htmlFor="verificationCode">
              Mã xác nhận
            </label>
            <input
              className="col-span-2 h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="text"
              id="verificationCode"
              name="verificationCode"
            />
          </div>
          <div className="grid grid-cols-3 mt-5">
            <label className="col-span-1" htmlFor="verificationCode">
              Mật khẩu mới
            </label>
            <input
              className="col-span-2 h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="text"
              id="verificationCode"
              name="verificationCode"
            />
          </div>
          <div className="grid grid-cols-3 mt-5">
            <label className="col-span-1" htmlFor="verificationCode">
              Nhập lại mật khẩu mới
            </label>
            <input
              className="col-span-2 h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
              type="text"
              id="verificationCode"
              name="verificationCode"
            />
          </div>
          <div className="grid grid-cols-3 mt-2">
            <span className="col-span-1"></span>
            <div className="col-span-2 text-left">
              <span
                onClick={signupHandler}
                className="text-[14px] font-normal hover:text-primary transition duration-150 cursor-pointer"
              >
                Đăng ký tài khoản mới
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5">
            <span className="col-span-1" />
            <div className="col-span-2 text-left">
              <button className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 uppercase transition duration-300 ease-in-out bg-blue rounded-[0.25rem] leading-normal border-[1px] border-solid border-blue hover:bg-darkBlue100 hover:border-darkBlue200">
                Lấy lại mật khẩu
              </button>
            </div>
          </div>
        </form>
      </div>
    </NavigationLayout>
  );
}

export default ForgetPassword;
