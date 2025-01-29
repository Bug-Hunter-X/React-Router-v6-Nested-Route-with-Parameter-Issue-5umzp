import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }
function Contact() {
  let { id } = useParams();
  return (
    <div>
      Contact {id ? `(${id})` : ''}
    </div>
  );
}

export default App;