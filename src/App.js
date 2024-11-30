import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { Allrout } from './Component/Allroutes/Allroutes';
import { Marque } from './Component/Pages/Marque';
import TawkToChat from './Component/Pages/TawkToChat';
import WhatsAppChat from './Component/Pages/WhatsAppChat';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Marque/>
      <Allrout/>
      <TawkToChat/>
      <WhatsAppChat/>
    </div>
  );
}

export default App;
