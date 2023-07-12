/* eslint-disable */
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Select from "./components/Select";
import Header from "./components/Header";
import FirstModal from "./components/modal/FirstModal";
import SecondModal from "./components/modal/SecondModal";
const App = () => {
  return (
    <div className='wrap'>
      <Header />
      <div className='main1'>
        <Buttons />
        <Input />
      </div>
      <div className='main2'>
        <FirstModal />
        <SecondModal />
      </div>
      <div>
        <Select />
      </div>
    </div>
  );
};

export default App;
