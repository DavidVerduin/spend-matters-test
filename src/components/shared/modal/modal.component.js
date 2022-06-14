import "./modal.css"
import { useModal } from "../../../services/effects/modal.effect";

export const ModalComponent = () => {

  const modalOptions = useModal();
  console.log("Modal", modalOptions);
  if(modalOptions) {

    const {width, height} = getSize(modalOptions.size);
    
    function getSize(sizeStr = "md") {
      if(sizeStr === 'sm') return {width: "20vw", height: "30vh"}
      if(sizeStr === 'md') return {width: "50vw", height: "60vh"}
      if(sizeStr === 'lg') return {width: "90vw", height: "90vh"}
    }
    
    return (
      <div className="modal display-block">
        <div className="modal-main" style={{width, height}}>

          <div className="modal-main__title">
            <h2>{modalOptions.title}</h2>
          </div>
          <div className="modal-main__component">
            {modalOptions.component}
          </div>
        </div>
      </div>
    )
  } else {
    return (<div className="display-none"></div>)
  }
}