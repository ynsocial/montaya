import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;