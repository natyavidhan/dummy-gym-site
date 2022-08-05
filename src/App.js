import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';
import Plans from './pages/Plans';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/plans" element={<Plans />} />
        </Routes>
    );
}

export default App;
