import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './lib/theme'
import AppRoutes from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
          <CssBaseline />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
