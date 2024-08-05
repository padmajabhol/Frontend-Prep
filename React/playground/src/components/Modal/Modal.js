/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div
          className="fixed w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-50 z-0"
          onClick={onClose}
        >
          <div className="fixed max-w-[500px] w-full p-5 shadow-md shadow-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999999] bg-white">
            <div className="flex items-center justify-between">
              <div className="modal-title">{title}</div>
              <span
                className="w-[30px] h-[30px] bg-cyan-300 rounded-2xl text-lg cursor-pointer"
                onClick={onClose}
              >
                X
              </span>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </>
    )
  );
};

export default Modal;
