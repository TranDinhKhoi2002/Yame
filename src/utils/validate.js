export const checkValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email || !email.match(regex)) {
    return false;
  }

  return true;
};

export const checkValidVietNamPhoneNumber = (phoneNumber) => {
  const regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  return regex.test(phoneNumber);
};
