import { Suspense } from "react";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection/MainSection";
import Navigation from "./Components/Navigation";

const ticketData = async () => {
  const response = await fetch("./support_tickets_data.json");
  const data = await response.json();
  return data;
};

const ticketDataPromise = ticketData();

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <MainSection ticketDataPromise={ticketDataPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
