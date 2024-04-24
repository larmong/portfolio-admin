// import { Navigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { authService } from "@commons/libraries/firebase/firebase.config";
// import { accessTokenState } from "@store/store";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";
//
// export default function PrivateRoute() {
//   const navigate = useNavigate();
//   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
//
//   useEffect(() => {
//     if (!accessToken) {
//       alert("로그인 이용 후 이용 가능합니다!");
//       navigate("/");
//     }
//   });
//
//   return <Navigate replace to="/dashboard" />;
// }

import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function PrivateRoute() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
      alert("로그인 이용 후 이용 가능합니다!");
    }
  }, [accessToken]);

  // accessToken이 있을 때만 대시보드로 이동
  if (accessToken) {
    return <Navigate replace to="/dashboard" />;
  } else {
    // accessToken이 없으면 아무것도 렌더링하지 않음
    return null;
  }
}
