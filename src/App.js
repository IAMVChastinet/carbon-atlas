import { useState } from 'react';
import './App.css';
import CdsDataGrid from './components/CdsDataGrid';
import NewQueryDialog from './components/NewQueryDialog';

function App() {
  const [toggleModal, setToggleModal] = useState(true)

  return (
    <atlas-application-frame backdrop={toggleModal}>
      <h1 slot="app-logo">Atlas-Carbon</h1>
      <bx-btn onClick={() => setToggleModal(true)} slot="contextual-controls" kind="primary" icon-layout="" size="">
        Add New Query
        <atlas-icon slot="icon" name="plusCircle" />
      </bx-btn>
      <NewQueryDialog setToggleModal={setToggleModal} slot="backdrop" />
      <CdsDataGrid slot="content-area" />
    </atlas-application-frame>
  );
}

export default App;
