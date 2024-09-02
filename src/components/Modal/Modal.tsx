import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'src/components/Button';

export type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ open, title, onClose, children }: PropsWithChildren<ModalProps>) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="mb-8 mt-8">{children}</div>
        <div className="text-right">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
