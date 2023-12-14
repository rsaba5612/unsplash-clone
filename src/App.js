import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/landing";


function App() {
  return (
   <BrowserRouter>
   <Routes>         {/*routes kitny routes defines krn h*/}
<Route path="/"element={<Landing />} >            {/*route btaye ga*/}

</Route>
   </Routes>
   </BrowserRouter>
  );
}


export default App;
