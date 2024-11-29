import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openDialog } from "../../lib/slices/GlobalDialogWrapperSlice";
import { setUser } from "../../lib/slices/userSlice";


const AuthGuard = ({ children }) => {
  const { data: session, status } = useSession();
  const dispatch=useDispatch()
  const router = useRouter();
  
  // Define an array of protected routes
  const protectedRoutes = ["/test", "/dashboard"]; // Add more protected routes as needed

  if (status === "loading") {
    return <></>; // Show a loading state while checking session
  }

  // Check if the current route is protected and if the user is authenticated
  if (protectedRoutes.includes(router.pathname) && !session) {
    dispatch(openDialog('login'))
    return null; // Prevent rendering the protected content
  }
  if(session){
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        if (!userData) {
          dispatch(openDialog("login"));
        }
        else{
          if(!userData?.formFilled){
            dispatch(openDialog("register"))
          }
          console.log(userData)
          dispatch (setUser(userData))
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }

  // If the user is authenticated or the route is not protected, render the content
  return <>
  {children}</>;
};

export default AuthGuard;
