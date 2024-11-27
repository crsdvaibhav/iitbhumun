import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openDialog } from "../../lib/slices/GlobalDialogWrapperSlice";


const AuthGuard = ({ children }) => {
  const { data: session, status } = useSession();
  const dispatch=useDispatch()
  const router = useRouter();
  
  // Define an array of protected routes
  const protectedRoutes = ["/test", "/profile"]; // Add more protected routes as needed

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking session
  }

  // Check if the current route is protected and if the user is authenticated
  if (protectedRoutes.includes(router.pathname) && !session) {
    // If not authenticated, redirect to sign-in page
    router.push("/login");
    return null; // Prevent rendering the protected content
  }
  console.log(session)
  if(!(session?.user?.formFilled)){
    dispatch(openDialog("register"))
  }

  // If the user is authenticated or the route is not protected, render the content
  return <>{children}</>;
};

export default AuthGuard;
