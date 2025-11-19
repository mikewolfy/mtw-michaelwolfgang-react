import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Links from './pages/Links';
import Developer from './pages/Developer/Developer';
import InterviewQuestions from './pages/Developer/InterviewQuestions';
import Podcasts from './pages/Developer/Podcasts';
import Resources from './pages/Developer/Resources';
import Reed from './pages/Family/Reed';
import Emma from './pages/Family/Emma';
import MomDad from './pages/Family/MomDad';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="links" element={<Links />} />
          
          {/* Developer Routes */}
          <Route path="developer" element={<Developer />} />
          <Route path="developer/interview-questions" element={<InterviewQuestions />} />
          <Route path="developer/podcasts" element={<Podcasts />} />
          <Route path="developer/resources" element={<Resources />} />
          <Route path="developer/certifications" element={<Developer />} />
          <Route path="developer/languages" element={<Developer />} />
          <Route path="developer/devops" element={<Developer />} />
          <Route path="developer/resume" element={<Developer />} />
          <Route path="developer/daily-reads" element={<Developer />} />
          <Route path="developer/patterns" element={<Developer />} />
          
          {/* Family Routes */}
          <Route path="reed" element={<Reed />} />
          <Route path="emma" element={<Emma />} />
          <Route path="mom-dad" element={<MomDad />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
