import './App.css';
import Header from './compos/Header';
import Page1 from './compos/Page1';
import Mid from './compos/Mid';
import Explore from './compos/Explore';
import Last from './compos/Last';
function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Page1/>
      <Mid/>
      <Explore/>
      <Last/>
    </div>
  );
}

export default App;
