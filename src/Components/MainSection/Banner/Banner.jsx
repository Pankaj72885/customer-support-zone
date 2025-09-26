import BannerCard from "./BannerCard";

const Banner = ({ tickets }) => {
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In-Progress"
  );
  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  );
  return (
    <section className="px-8 md:px-20 py-8 md:py-20 flex flex-col lg:flex-row justify-between gap-6">
      <BannerCard
        name="In-Progress"
        value={inProgressTickets.length}
        bgColor="from-custom-purple-dark to-custom-purple-light"
      ></BannerCard>
      <BannerCard
        name="Resolved"
        value={resolvedTickets.length}
        bgColor="from-custom-green-light to-custom-green-dark"
      ></BannerCard>
    </section>
  );
};

export default Banner;
