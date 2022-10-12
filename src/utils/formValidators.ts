export const isValidEmail = (value: string = ""): boolean => {
  let validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validEmailFormat.test(value) === false ? false : true;
};

export const isStrongPassword = (value: string = ""): boolean => {
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/gm;
  return passwordRegex.test(value) === false ? false : true;
};

export const isSamePassword = (
  password: string,
  confirmPassword: string
): boolean => {
  if (password === "" || confirmPassword === "") return false;

  return (password === confirmPassword) === false ? false : true;
};
