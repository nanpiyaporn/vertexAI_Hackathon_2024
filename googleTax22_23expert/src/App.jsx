import logo from './assets/logo.gif'; // import the image

import './App.css'

function App() {
 

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="logo" style={{ display: "block", margin: "0 auto" }} /> {/* use the imported image */}
      </div>
      <h1>Welcome to  Google Taxes Expert</h1>
      <h2>Annual report of the 2022 and 2023 </h2> 
      
      <p className="read-the-docs">
        {/*<p> credit logo1 img from https://dribbble.com/shots/2907057-Google-logo-animation </p>
        <p> credit logo2 img from https://www.iconfinder.com/icons/7123025/logo_google_g_icon</p>*/}
      </p>
    </>
  )
}

export default App
