import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Worlds from './components/Views/Worlds/Worlds';

function App() {
    return (
        <>
            <Nav />
            <Main >
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/worlds" element={ <Worlds /> } />
                    <Route path="/locations" element={<h1>Locations</h1>} />
                    <Route path="/settings" element={<h1>Settings</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>            
            </Main>
        </>
    )
}

export default App
