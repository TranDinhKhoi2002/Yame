import { hashSync } from "bcryptjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";
import {
  checkValidEmail,
  checkValidVietNamPhoneNumber,
} from "../../utils/validate";
import * as request from "../../utils/request";

function Signup() {
  const [userNameValue, setUserNameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [displayNameValue, setDisplayNameValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();

    let message;
    if (
      !userNameValue ||
      !passwordValue ||
      !confirmPasswordValue ||
      !displayNameValue
    ) {
      message = "Vui lòng nhập đầy đủ thông tin";
    } else if (
      userNameValue &&
      !isNaN(userNameValue) &&
      !checkValidVietNamPhoneNumber(userNameValue)
    ) {
      message = "Số điện thoại không hợp lệ";
    } else if (
      userNameValue &&
      isNaN(userNameValue) &&
      !checkValidEmail(userNameValue)
    ) {
      message = "Email không hợp lệ";
    } else if (
      (passwordValue && passwordValue.length < 8) ||
      (confirmPasswordValue && confirmPasswordValue < 8)
    ) {
      message = "Mật khẩu phải có ít nhất 8 kí tự";
    } else if (
      passwordValue &&
      confirmPasswordValue &&
      passwordValue !== confirmPasswordValue
    ) {
      message = " Mật khẩu không trùng khớp, vui lòng nhập lại";
    }

    if (message) {
      toast.error(<ToastifyMessage title="Lỗi đăng ký" message={message} />);
      return;
    }

    const newUser = {
      userName: userNameValue,
      hashedPassword: hashSync(passwordValue),
      displayName: displayNameValue,
    };

    try {
      setIsLoading(true);
      const data = await request.postUser(newUser);
      if (data.message) {
        throw new Error("Số điện thoại hoặc Email này đã tồn tại");
      } else if (data) {
        toast.success(
          <ToastifyMessage
            title="Đăng ký"
            message="Đăng ký tài khoản thành công"
          />
        );
        setIsLoading(false);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        throw new Error("Đăng ký không thành công, vui lòng thử lại");
      }
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
      toast.error(<ToastifyMessage title="Đăng ký" message={err.message} />);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const elements = [
    ["name", "Họ tên", displayNameValue, setDisplayNameValue, "text"],
    ["userName", "Điện thoại / Email", userNameValue, setUserNameValue, "text"],
    ["password", "Mật khẩu", passwordValue, setPasswordValue, "password"],
    [
      "confirmPassword",
      "Nhập lại mật khẩu",
      confirmPasswordValue,
      setConfirmPasswordValue,
      "password",
    ],
  ];

  return (
    <NavigationLayout title="Đăng ký">
      <div className="w-[90%] md:w-[55%] mx-auto my-12">
        <h3 className="text-[1.75rem] font-medium leading-[1.2] mb-6 text-center">
          Đăng ký tài khoản
        </h3>
        {isLoading && (
          <p className="text-center text-[#308f69] font-normal">
            Đang thực thi...
          </p>
        )}
        <form>
          {elements.map(([id, label, value, setValue, type], index) => (
            <div key={index} className="grid grid-cols-3 mt-5">
              <label className="col-span-1" htmlFor={id}>
                {label}
              </label>
              <div className="col-span-2">
                <input
                  onBlur={(e) => setValue(e.target.value)}
                  className="w-full h-[43px] bg-[#e8f0fe] outline-none py-[0.375rem] px-3 border-[1px] border-solid border-[#ced4da] rounded-[0.25rem] focus:border-primary transition duration-150"
                  type={type}
                  id={id}
                  name={id}
                />
                {value === "" && (
                  <label className="text-primary">
                    Vui lòng nhập đầy đủ thông tin
                  </label>
                )}
                {value &&
                  id === "userName" &&
                  !isNaN(value) &&
                  !checkValidVietNamPhoneNumber(value) && (
                    <label className="text-primary">
                      Số điện thoại không hợp lệ
                    </label>
                  )}
                {value &&
                  id === "userName" &&
                  isNaN(value) &&
                  !checkValidEmail(value) && (
                    <label className="text-primary">Email không hợp lệ</label>
                  )}
                {value &&
                  (id === "password" || id === "confirmPassword") &&
                  value.length < 8 && (
                    <label className="text-primary">
                      Mật khẩu phải có ít nhất 8 kí tự <br></br>
                    </label>
                  )}
                {value &&
                  id === "confirmPassword" &&
                  passwordValue &&
                  value !== passwordValue && (
                    <label className="text-primary">
                      Mật khẩu không trùng khớp, vui lòng nhập lại
                    </label>
                  )}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 mt-2">
            <span className="col-span-1"></span>
            <div className="col-span-2 text-left">
              <span className="text-[14px] text-[#787878] font-normal">
                Đã có tài khoản?
              </span>
              <span
                onClick={loginHandler}
                className="text-[14px] font-normal hover:text-primary ml-3 transition duration-150 cursor-pointer"
              >
                Đăng nhập
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5">
            <span className="col-span-1" />
            <div className="col-span-2 text-left">
              <button
                onClick={signupHandler}
                disabled={isLoading}
                className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 uppercase transition duration-300 ease-in-out bg-blue disabled:bg-slate-400 disabled:border-slate-400 rounded-[0.25rem] leading-normal border-[1px] border-solid border-blue hover:bg-darkBlue100 hover:border-darkBlue200"
              >
                Tạo tài khoản
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={3000} limit={1} pauseOnFocusLoss={false} />
    </NavigationLayout>
  );
}

export default Signup;
