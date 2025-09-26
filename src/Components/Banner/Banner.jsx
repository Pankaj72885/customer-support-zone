import Container from "../Container";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <section className="px-8 md:px-20 py-8 md:py-20 flex flex-col md:flex-row justify-between gap-6">
          <BannerCard
            name="In-Progress"
            value={0}
            bgColor="from-custom-purple-dark to-custom-purple-light"
          ></BannerCard>
          <BannerCard
            name="Resolved"
            value={0}
            bgColor="from-custom-green-light to-custom-green-dark"
          ></BannerCard>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
