import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Props_ex from './components/Props_ex'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import Footer from './components/Footer'
import FormHandling from './components/FormHandling'
import FetchMultiPost from './components/FetchMultiPost'
import FetchSinglePost from './components/FetchSinglePost'
import UseRed_ex from './components/UseRed_ex'
import UseState_ex2 from './components/UseState_ex2'
import ListRendering from './components/ListRendering'

function App() {
 
  return (
    <>
      <div>
        <Props_ex name="peter" age={23}/>
        <Conditional1 isLoggedIn={true} />
        <Conditional2 isLoggedIn={false} />
      </div>



<Footer />
<FormHandling/>
<FetchMultiPost/>
<FetchSinglePost/>
<UseRed_ex/>
<UseState_ex2/>
<ListRendering/>
      {/* <BrowserRouter>
      <Navbar/>
      </BrowserRouter> */}
    </>
  )
}

export default App
