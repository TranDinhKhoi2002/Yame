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
import { hashSync } from "bcryptjs";
import emailjs from "@emailjs/browser";

let verificationCode;

function ForgetPassword(props) {
  const [userNameValue, setUserNameValue] = useState();
  const [code, setCode] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signupHandler = () => {
    navigate("/signup");
  };

  const sendVerificationCodeHandler = async () => {
    setIsLoading(true);
    const existingUser = await request.getExistingUser(userNameValue);
    if (!existingUser) {
      toast.error(
        <ToastifyMessage title="Lỗi" message="Tên đăng nhập không tồn tại" />
      );
      setIsLoading(false);
      return;
    }

    verificationCode = Math.floor(Math.random() * 1000000);
    if (!isNaN(userNameValue) && checkValidVietNamPhoneNumber(userNameValue)) {
      fetch(
        `http://localhost:4000/forget-password?recipient=${userNameValue}&code=${verificationCode}`
      ).catch((err) => console.log(err));

      console.log(verificationCode);
    } else if (isNaN(userNameValue) && checkValidEmail(userNameValue)) {
      await emailjs.send(
        "service_rnc01bw",
        "template_gyx5uzt",
        {
          to_name: userNameValue,
          message: verificationCode,
          from_email: "",
          to_email: userNameValue,
        },
        "6ZZL-ODHIXurOO_2n"
      );
    } else {
      alert("Có lỗi xảy ra khi gửi mã xác nhận, vui lòng thử lại");
      return;
    }
    toast.success(
      <ToastifyMessage
        title="Quên mật khẩu"
        message="Đã gửi mã xác nhận đến số điện thoại / email"
      />
    );
    setIsLoading(false);
  };

  const checkValidUserNameHandler = () => {
    if (!isNaN(userNameValue) && checkValidVietNamPhoneNumber(userNameValue)) {
      return true;
    }

    if (isNaN(userNameValue) && checkValidEmail(userNameValue)) {
      return true;
    }

    return false;
  };

  const checkVerificationCode = () => {
    if (code && Number(code) === verificationCode) {
      return true;
    }

    return false;
  };

  const restorePasswordHandler = async (e) => {
    e.preventDefault();

    let message;

    if (!userNameValue || !code || !passwordValue || !confirmPasswordValue) {
      message = "Vui lòng điền đầy đủ thông tin";
    } else if (!checkValidUserNameHandler()) {
      message = "Điện thoại / Email không hợp lệ";
    } else if (!checkVerificationCode()) {
      message = "Mã xác nhận không đúng, vui lòng kiểm tra lại";
    } else if (passwordValue.length < 8 || confirmPasswordValue.length < 8) {
      message = "Mật khẩu phải có ít nhất 8 kí tự";
    } else if (confirmPasswordValue !== passwordValue) {
      message = "Mật khẩu không trùng khớp, vui lòng nhập lại";
    }

    if (message) {
      toast.error(<ToastifyMessage title="Quên mật khẩu" message={message} />);
    } else {
      setIsLoading(true);
      await request.updatePassword(userNameValue, hashSync(passwordValue));

      setIsLoading(false);
      toast.success(
        <ToastifyMessage
          title="Quên mật khẩu"
          message="Thay đổi mật khẩu thành công"
        />
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const elements = [
    ["userName", "Điện thoại / Email", userNameValue, setUserNameValue, "text"],
    ["verificationCode", "Mã xác nhận", code, setCode, "text"],
    [
      "new-password",
      "Mật khẩu mới",
      passwordValue,
      setPasswordValue,
      "password",
    ],
    [
      "confirm-new-password",
      "Nhập lại mật khẩu mới",
      confirmPasswordValue,
      setConfirmPasswordValue,
      "password",
    ],
  ];

  return (
    <NavigationLayout title="Quên mật khẩu">
      <div className="w-[80%] md:w-[55%] mx-auto my-12">
        {" "}
        <h3 className="text-[1.75rem] text-center font-medium leading-[1.2] mb-6">
          Quên mật khẩu
        </h3>
        {isLoading && (
          <p className="text-center text-[#308f69] font-normal">
            Đang thực thi...
          </p>
        )}
        <form>
          {elements.map(([id, label, value, setValue, type], index) => (
            <div key={index} className="grid grid-cols-3 my-5">
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
                {id === "userName" && (
                  <span
                    onClick={sendVerificationCodeHandler}
                    className="md:absolute md:ml-3 font-normal hover:text-primary transition duration-150 cursor-pointer"
                  >
                    Lấy mã
                  </span>
                )}
                {id === "userName" &&
                  (value === "" || (value && !checkValidUserNameHandler())) && (
                    <label className="text-primary">
                      Số điện thoại không hợp lệ
                    </label>
                  )}
                {((id === "verificationCode" && value === "") ||
                  (value &&
                    id === "verificationCode" &&
                    !checkVerificationCode())) && (
                  <label className="text-primary">Mã xác nhận không đúng</label>
                )}
                {id === "new-password" &&
                  (value === "" || (value && value.length < 8)) && (
                    <label className="text-primary">
                      Mật khẩu phải có ít nhất 8 kí tự
                    </label>
                  )}
                {id === "confirm-new-password" &&
                  (value === "" || (value && value.length < 8)) && (
                    <label className="text-primary">
                      Mật khẩu phải có ít nhất 8 kí tự <br />
                    </label>
                  )}
                {id === "confirm-new-password" &&
                  passwordValue &&
                  value !== passwordValue &&
                  confirmPasswordValue && (
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
              <button
                onClick={restorePasswordHandler}
                className="h-[43px] text-[13px] font-normal text-white py-[0.375rem] px-3 uppercase transition duration-300 ease-in-out bg-blue rounded-[0.25rem] leading-normal border-[1px] border-solid border-blue hover:bg-darkBlue100 hover:border-darkBlue200"
              >
                Lấy lại mật khẩu
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={3000} limit={1} pauseOnFocusLoss={false} />
    </NavigationLayout>
  );
}

export default ForgetPassword;
