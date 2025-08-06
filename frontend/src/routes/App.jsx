import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Success from '../pages/Success';
import Cancel from '../pages/Cancel';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
}
