import StatusCard from "./StatusCard";
import ResolvedCard from "./ResolvedCard";
const TaskStatus = ({ tickets, handleCompleteStatus }) => {
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In-Progress"
  );
  const inResolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  );
  return (
    <div className="lg:col-span-2 sm:flex sm:justify-start sm:gap-8 lg:flex-col ">
      <div className="mb-8 sm:flex-1 sm:w-full lg:flex-0 lg:mb-0">
        <h1 className="header-text pb-4">Task Status</h1>
        <div className="flex flex-col gap-4">
          {inProgressTickets.length > 0 ? (
            inProgressTickets.map((ticket) => (
              <StatusCard
                key={ticket.id}
                ticket={ticket}
                handleCompleteStatus={handleCompleteStatus}
              />
            ))
          ) : (
            <p className="text-custom-text">No tasks in progress.</p>
          )}
        </div>
      </div>
      <div className="sm:flex-1 lg:flex-0 sm:w-full">
        <h1 className="header-text pb-4">Resolved Task</h1>
        <div className="flex flex-col gap-4">
          {inResolvedTickets.length > 0 ? (
            inResolvedTickets.map((ticket) => (
              <ResolvedCard ticket={ticket} key={ticket.id} />
            ))
          ) : (
            <p className="text-custom-text">No tasks in progress.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
