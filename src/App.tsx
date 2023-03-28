import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {store} from './store';
import {Normalize} from 'styled-normalize';
import AppLayout from './components/Layout';
import Routes from './Routes';
import {defaultTheme} from './ui-kit/theme/theme';
import './ui-kit/fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <AppLayout>
          <Routes />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
