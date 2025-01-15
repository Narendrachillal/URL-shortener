import { Route, Routes } from "react-router-dom";
import Urlshortner from "./component/Urlshortner";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Urlshortner />} />
      </Routes> */}
      <Urlshortner />
    </>
  );
}

export default App;
