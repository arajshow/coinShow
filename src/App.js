import './App.css';
import Navbar from './components/Navbar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import GraphElement from './components/GraphElement';

function App() {

    return (
    <div className="w-screen min-h-screen bg-backgroundColor flex flex-col font-inter">
      <Navbar />
      <div className='flex w-[96%] mx-auto md:w-11/12 items-center justify-start gap-[20px]'>

        {/* Cryptocurrencies >> Bitcoin */}
        <div className='flex mt-[10px] items-center'>
          <p className='flex text-[14px] font-inter text-slate-500 mr-2'>Cryptocurrencies </p>
          <MdKeyboardDoubleArrowRight className='text-slate-700' />
          <span className='text-black font-bold ml-2'>{" Bitcoin "}</span>
        </div>

        {/* graph */}
        <GraphElement />
      </div>
      
    </div>
  );

  // return (
  //   <div className="text-xl">
  //     Hii bsdika
  //     <img src={logo} className=" text-4xl" alt="logo" />
  //   </div>
  // );
}

export default App;
