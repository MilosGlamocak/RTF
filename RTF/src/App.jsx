import Header from "./components/Header"
import IpGetter from "./components/IpGetter"
import RtfHead from "./components/rtfHead"
import './styles/App.css'

function App() {

  return (
    <div className='appCont'>
      <div className='appContGradient'>
        <Header />
        <RtfHead />
        <IpGetter />
      </div>
    </div>
  )
}

export default App
