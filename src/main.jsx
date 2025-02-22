import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import {Provider as ChakraUIProvider} from '@/components/ui/provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ChakraUIProvider> <App /></ChakraUIProvider>
   
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
