import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
        </Routes>
    );
}

export default App;
