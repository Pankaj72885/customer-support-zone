const ResolvedCard = ({ ticket }) => {
  return (
    <div className="p-4 space-y-3 bg-[#E0E7FF] shadow-custom rounded">
      <h2 className="text-lg font-semibold text-[#001931]">
        {ticket.title}
      </h2>
    </div>
  );
};

export default ResolvedCard;
