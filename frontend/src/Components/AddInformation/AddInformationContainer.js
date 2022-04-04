import AddInformation from './AddInformation';

import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
const AddInformationContainer = (props) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: 'MODAL_CLOSE' });
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AddInformation closeModal={closeModal}/>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default AddInformationContainer;
