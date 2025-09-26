

const StatusCard = ({ticket, handleCompleteStatus }) => {
  const handleClick = () => {
    handleCompleteStatus(ticket.id);
    alert(`Ticket ${ticket.id} status changed to Resolved`);
  };
  return (
    <div
      
      className="p-4 space-y-3 bg-white shadow-custom rounded"
    >
      <h2 className="text-lg font-semibold text-[#34485A] mb-2">
        {ticket.title}
      </h2>
      <button
        onClick={handleClick}
        className="btn w-full bg-[#02A53B] text-white"
      >
        Complete
      </button>
    </div>
  );
};

export default StatusCard;