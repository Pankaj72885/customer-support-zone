import dateSvg from "../../../assets/date.svg";

const Card = ({ ticket, handleStateUpdate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-[#B9F8CF] before:bg-[#02A53B]";
      case "In-Progress":
        return "bg-[#FFF4C1] before:bg-[#E2B93B]";
      case "Closed":
        return "bg-[#F8B9B9] before:bg-[#F83044]";
      default:
        return "bg-gray-200 before:bg-gray-500";
    }
  };

  const handleClick = () => {
    handleStateUpdate(ticket.id);
    console.log(`Ticket ${ticket.id} status changed to In-Progress`);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 space-y-3 bg-white shadow-custom rounded"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#001931]">{ticket.title}</h2>
        <button
          className={`rounded-full px-3 py-1 before:content-[''] before:inline-block before:w-3 before:h-3 before:rounded-full before:mr-2 ${getStatusColor(
            ticket.status
          )}`}
        >
          {ticket.status}
        </button>
      </div>
      <div>
        <p className="text-custom-text text-justify">{ticket.description}</p>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-4 items-center">
          <p className="text-custom-text">
            #<span>{ticket.id}</span>
          </p>
          <p
            className={`${
              ticket.priority == "HIGH PRIORITY"
                ? "text-[#F83044]"
                : ticket.priority == "MEDIUM PRIORITY"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            }`}
          >
            {ticket.priority}
          </p>
        </div>
        <div className="flex gap-4 items-center text-custom-text">
          <p>{ticket.customer}</p>
          <div className="flex gap-1 items-center">
            <img src={dateSvg} alt="Date logo" />
            <span>{ticket.createdAt.split("T")[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
