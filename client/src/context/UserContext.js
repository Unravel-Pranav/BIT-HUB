// UserContext.js
// import { createContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;


// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import {getData} from '../api/CrudApi'
const UserContext = createContext();

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState(null);
  const [details , setDetails] = useState([]);
  useEffect(()=>{
    if(userContext){

      GetAllUser(userContext._id);
    }
  },[userContext])
  const GetAllUser=async(id)=>{
    console.log("hii");
    console.log(id)
    const  response = await getData(id);
    console.log(response.data)
    setDetails(response.data);
  };
  return (
    <UserContext.Provider value={{ details , setUserContext }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

