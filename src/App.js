// import React from 'react'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Nav from './Nav'
// import Home from './Home'
// import About from './About'
// import Form from './Form'
// import ErrorBoundary from './ErrorBoundary'
// function App() {
//   return (
//    <ErrorBoundary fallback={<Form />}>
//      <BrowserRouter>
//     <Route>
//       <Route path="/" element={<Nav />}>
//       <Route path="/home" element={<Home />}></Route>
//       <Route path="/about" element={<About />}></Route>
//       <Route path="/login" element={<Form/>}></Route>
//       </Route>
//     </Route>
//     </BrowserRouter>
//    </ErrorBoundary>
//   )
// }

// export default App 



import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Form from './Form'
import QrCode from './QrCode'
import Life1 from './Lifecycle/Life1'
import Grid from './Grid'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Weather from './Weather/Weather'
function App() {
  return (
    <div>
        <Grid/>
        {/* <Home />
        <About/>
        <Form/> */}
    </div>
  )
}

export default App