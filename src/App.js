import './App.css';
import "./styles/scrollbar.css";
import { LayoutComponent } from './components/layout/layout.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { EventManagerFactory } from './services/event.manager.factory';

function App() {
  return (
    <div className="App" onClick={hideModal}>
      <LayoutComponent></LayoutComponent>
      <ModalComponent></ModalComponent>
    </div>
  );
}

function hideModal() {
  const eventService = EventManagerFactory.getEventManager("MODAL");
  eventService.emit(null);
}

export default App;
