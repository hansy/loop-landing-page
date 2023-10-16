import Link from "next/link";
import Container from "../Container";
import CtaForm from "../Cta/Form";

const Header = () => {
  return (
    <div className="text-center mt-8 mb-20 lg:mt-24 lg:mb-40">
      <Container>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl">
          <span className="block mb-4">Play your videos anywhere.</span>
          <span className="block xl:inline">
            Get paid <span className="rainbow">everywhere</span>.
          </span>
        </h1>
        <p className="mt-16 max-w-xl mx-auto text-xl text-gray-200 md:mt-20 md:text-2xl">
          Loop lets you (and your fans) embed your videos on any website and get
          paid together.
        </p>
        <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-5">
          <CtaForm buttonLabel="Join beta" placeholder="Email" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
