import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthorized, api } = useContext(AuthContext);
  const [userData, setUserData] = useState([])

  const getUserDetails = async () => {
    try {
      const response = await api.get("api/user-details/");
      if (response.status === 200) {
        setUserData(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      getUserDetails();
    }
  }, [isAuthorized]);
  const value = {userData};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
