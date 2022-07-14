import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import ToastifyMessage from "../../components/ToastifyMessage/ToastifyMessage";
import { checkValidEmail } from "../../utils/email";

function Signup() {
  const [userNameValue, setUserNameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [displayNameValue, setDisplayNameValue] = useState();
  const navigate = useNavigate();

  const signupHandler = (e) => {
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
      !checkValidPhoneNumber(userNameValue)
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

    alert("Dang ki thanh cong");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const checkValidPhoneNumber = (phoneNumber) => {
    const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    return regex.test(phoneNumber);
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
      <div className="w-[90%] md:w-[55%] mx-auto">
        <h3 className="text-[1.75rem] font-medium leading-[1.2] mb-6 text-center">
          Đăng ký tài khoản
        </h3>
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
                  value === userNameValue &&
                  !isNaN(value) &&
                  !checkValidPhoneNumber(value) && (
                    <label className="text-primary">
                      Số điện thoại không hợp lệ
                    </label>
                  )}
                {value &&
                  value === userNameValue &&
                  isNaN(value) &&
                  !checkValidEmail(value) && (
                    <label className="text-primary">Email không hợp lệ</label>
                  )}
                {value &&
                  (value === passwordValue || value === confirmPasswordValue) &&
                  value.length < 8 && (
                    <label className="text-primary">
                      Mật khẩu phải có ít nhất 8 kí tự <br></br>
                    </label>
                  )}
                {value &&
                  value === confirmPasswordValue &&
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
                className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 uppercase transition duration-300 ease-in-out bg-blue rounded-[0.25rem] leading-normal border-[1px] border-solid border-blue hover:bg-darkBlue100 hover:border-darkBlue200"
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
