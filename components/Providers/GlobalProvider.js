import { ThemeProvider } from '@material-tailwind/react';
import { Toaster} from 'react-hot-toast';
import GlobalDialog from '../GlobalDialogWrapper/GlobalDialogWrapper';
import AuthGuard from './Authguard';

const GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider>
       <Toaster position="top-center" />
        <GlobalDialog>
          <AuthGuard>
            {children}
          </AuthGuard>
        </GlobalDialog>
    </ThemeProvider>
  );
};

export default GlobalProvider;
