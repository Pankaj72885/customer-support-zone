import Card from "./Card";
const CustomerTickets = ({ tickets, handleStateUpdate }) => {

  const showTickets = tickets.filter((ticket) => ticket.status !== "Resolved");
  return (
    <div className="md:col-span-5">
      <h1 className="header-text">Customer Tickets</h1>
      <div className="grid grid-cols-2 gap-4 md:gap-x-6 mt-4">
        {showTickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            handleStateUpdate={handleStateUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
