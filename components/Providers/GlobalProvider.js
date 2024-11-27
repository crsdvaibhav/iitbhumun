import { ThemeProvider } from '@material-tailwind/react';
import GlobalDialog from '../GlobalDialogWrapper/GlobalDialogWrapper';
import AuthGuard from './Authguard';

const GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider>
        <GlobalDialog>
          <AuthGuard>
            {children}
          </AuthGuard>
        </GlobalDialog>
    </ThemeProvider>
  );
};

export default GlobalProvider;
