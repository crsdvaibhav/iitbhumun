import Footer from '@/components/Footer';
import RegisterForm from '@/components/auth/register-form';
import Navbar from '@/components/common/navbar';

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-4xl mx-auto">
        <div className="my-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="font-semibold text-4xl">
              Delegate Application Form
            </h1>
            <h3 className="">
              <span className="text-red-500">Note: </span>Campus Ambassadors
              also need to fill up this form.
            </h3>
          </div>
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
