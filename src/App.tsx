import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ecs from "./models/ecs-status";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ecs" element={<Ecs />}/>
      </Routes>
    </Router>
  );
}

export default App;
