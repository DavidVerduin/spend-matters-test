import './App.css';
import "./styles/scrollbar.css";
import { LayoutComponent } from './components/layout/layout.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { EventManagerFactory } from './services/event.manager.factory';

/** The whole react app. Contains Layout and Modal component, aswell as an onClick event handler to close the modal, if there is one opened */
function App() {
  return (
    <div className="App" onClick={hideModal}>
      <LayoutComponent></LayoutComponent>
      <ModalComponent></ModalComponent>
    </div>
  );
}

/** Sends an event to close the modal if there is one opened */
function hideModal() {
  const eventService = EventManagerFactory.getEventManager("MODAL");
  eventService.emit(null);
}

export default App;
