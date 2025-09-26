import { use, useState } from "react";
import Container from "../Container";
import Banner from "./Banner/Banner";
import TaskStatus from "./TaskStatus/TaskStatus";
import CustomerTickets from "./TicketCards/CustomerTickets";

const MainSection = ({ ticketDataPromise }) => {
  const data = use(ticketDataPromise);
  const allTickets = data.tickets;
  const [tickets, setTickets] = useState(allTickets);
  const handleStateUpdate = (ticketId) => {
    setTickets((tickets) =>
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: "In-Progress" } : ticket
      )
    );
  };
  const handleCompleteStatus = (ticketId) => {
    setTickets((tickets) =>
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: "Resolved" } : ticket
      )
    );
  };

  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Container>
          <Banner tickets={tickets} />
          <section className="px-8 md:px-20 pb-8 md:pb-20 grid grid-cols-1 lg:grid-cols-7 gap-8 ">
            <CustomerTickets
              tickets={tickets}
              handleStateUpdate={handleStateUpdate}
            />
            <TaskStatus
              tickets={tickets}
              handleCompleteStatus={handleCompleteStatus}
            />
          </section>
        </Container>
      </div>
    </>
  );
};

export default MainSection;
