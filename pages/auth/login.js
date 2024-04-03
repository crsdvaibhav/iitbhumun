import Footer from '@/components/Footer';
import Navbar from '@/components/common/navbar';
import { SignInButton } from '@clerk/nextjs';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-4xl mx-auto">
        {/* <SignInButton /> */}
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
