import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const notify1 = () => {
    toast('Basic');
  };

  const notify2 = () => {
    toast.success('Success', { position: 'top-center' });
  };

  const notify3 = () => {
    toast.warning('Warning', { position: 'bottom-right', autoClose: 2000 });
  };

  const notify4 = () => {
    toast.error('Error Type', { position: 'bottom-left', autoClose: false });
  };

  const notify5 = () => {
    toast.info(<CustomToast />, { position: 'bottom-center' });
  };

  const CustomToast = ({ closeToast }) => {
    return (
      <div>
        Something Good
        <button onClick={closeToast}>Close </button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={notify1}>Basic Notify</button>
      <button onClick={notify2}>Success Notify</button>
      <button onClick={notify3}>AutoClose Notify</button>
      <button onClick={notify4}>No AutoClose Notify</button>
      <button onClick={notify5}>Custom toast Notify</button>

      <ToastContainer />
    </div>
  );
};

export default Toast;
