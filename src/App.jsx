/* eslint-disable */
import "./App.css";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Select from "./components/Select";
import Header from "./components/Header";
import ModalBefore from "./components/ModalBefore";
import ModalDialog from "./components/Modal";
const App = () => {
  return (
    <div className='wrap'>
      <Header />
      <div className='main1'>
        <Buttons />
        <Input />
      </div>
      <div>
        <ModalBefore />
        <ModalDialog />
      </div>
      <div>
        <Select />
      </div>
    </div>
  );
};

export default App;
