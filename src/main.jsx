import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserLayout from './layout/UserLayout.jsx'
import CardLayout from './layout/CardLayout.jsx'
import CheckBox from './controls/CheckBox.jsx'
import RadioButton from './controls/RadioButton.jsx'
import TextBox from './controls/TextBox.jsx'
import LoginForm from './controls/LoginForm.jsx'
import CoreApp from './CoreApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <UserLayout/>
    <CardLayout/> */}
    {/* <CheckBox/>
    <RadioButton/>
    <TextBox/> */}
    <LoginForm/>
    {/* <CoreApp/> */}
  </StrictMode>,
)
