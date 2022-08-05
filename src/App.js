import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';
import Plans from './pages/Plans';
import Schedule from './pages/Schedule';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/schedule" element={<Schedule />} />
        </Routes>
    );
}

export default App;
