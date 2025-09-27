import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
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
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-50 text-3xl text-center text-warning bg-[#F5F5F5]">
            <span className="loading loading-spinner text-warning w-10 h-10"></span>{" "}
            Loading...
          </div>
        }
      >
        <MainSection ticketDataPromise={ticketDataPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
