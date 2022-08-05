import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';
import Plans from './pages/Plans';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;
