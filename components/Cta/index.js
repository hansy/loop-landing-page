import Container from "../Container";
import CtaForm from "./Form";

const Cta = () => {
  return (
    <div className="relative px-6 py-10 bg-gray-800 overflow-hidden shadow-xl sm:px-12 sm:py-20">
      <Container>
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-indigo-500 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-indigo-900 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold text-gray-50 tracking-tight sm:text-4xl">
              Enter the Loop
            </h2>
            <p className="mt-6 mb-8 mx-auto max-w-lg text-lg text-indigo-200">
              Join as an early partner. Help us build and shape Loop into
              something you and your fans will love.
            </p>
          </div>
          <CtaForm buttonLabel="Join beta" placeholder="Email" />
        </div>
      </Container>
    </div>
  );
};

export default Cta;
