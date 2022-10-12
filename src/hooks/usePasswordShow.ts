import { useState } from "react";

const usePasswordShow = () => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);

  const showPassword = (): void => {
    setPasswordShow(!passwordShow);
  };

  return { passwordShow, showPassword };
};

export default usePasswordShow;
