import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Togglebtn from "./Comps/Togglebtn"

import Footer from "./Comps/Footer";
// import Popup from "./Comps/Popup"
import { useState } from "react";
import { English } from "./content/English";
import { Marathi } from "./content/Marathi";


function App() {

  const [lang ,setlang]  = useState(Marathi)

  function changelang () {
    if(lang === English) {
      setlang(Marathi);
    }
  
    else if(lang === Marathi) {
      setlang(English);
    }
  }



  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Popup /> */}



        <Routes>
          <Route path="/" element={<Home  data={lang} />}   />
        </Routes>
        <Footer changelang={changelang} />
        <Togglebtn changelang={changelang}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
