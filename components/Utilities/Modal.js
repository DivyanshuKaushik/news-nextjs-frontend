const Modal = ({ show, children }) => {
  return (
    <>
      {show && (
        <div className="absolute z-50 h-screen w-full">
          <div className="">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
