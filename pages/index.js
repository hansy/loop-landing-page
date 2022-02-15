import Header from "../components/Header";
import Features from "../components/Features";
import Cta from "../components/Cta";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative bg-gray-800">
      <Navbar />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main>
          <Header />
          <Features />
          <Cta />
        </main>
      </div>
    </div>
  );
};

export default Home;
