
import React from 'react'

import { Toast, ToastBody } from 'reactstrap';

const ToastAlert = ({ message }) => {
    return(
      <div className="p-3 my-2 fixed-top text-center rounded">
        <Toast>
          <ToastBody>
            {message}
          </ToastBody>
        </Toast>
      </div>
    )
}

export default ToastAlert