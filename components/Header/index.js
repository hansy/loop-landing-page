import Container from "../Container";
import CtaForm from "../Cta/Form";

const Header = () => {
  return (
    <div className="text-center mt-8 mb-20 lg:mt-24 lg:mb-40">
      <Container>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl">
          <span className="block">
            Your <span className="rainbow">videos</span>.
          </span>{" "}
          <span className="block xl:inline">
            Your <span className="rainbow2 ">money</span>.
          </span>
        </h1>
        <p className="mt-5 max-w-md mx-auto text-xl text-gray-50 md:mt-8 md:text-2xl">
          Loop lets you embed and monetize your videos directly on your website.
        </p>
        <div className="mt-6 mx-auto sm:flex sm:justify-center md:mt-12">
          <CtaForm buttonLabel="Join beta" placeholder="Email" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
