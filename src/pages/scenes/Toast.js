// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.success(`Script "${fileName}" Added`);


const Toast = () => {  
  return (<div>

{/* 

<p align="center"> <strong>Success Message</strong></p>
<h2 align="center">
<img src="documentation/readme-images/toast.png" width="50%">
</h2> 

*/}

    <div>
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </div>
    </div>
  )
}

export default Toast

