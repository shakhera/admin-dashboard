const DetailModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="mb-4">{content}</div>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailModal;
