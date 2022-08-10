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
        <iframe
          src="https://app.getloop.xyz/0x2Caefce8cF1D7C3AB072BA13934FA6D08d54ba6F/videos/QmTgihxkQRghKKbib7hCSKbv2YhMZRQYhUs5LauZpwC8K1"
          className="w-full aspect-video rounded-lg mt-20 mb-3"
        />
        <p className="text-purple-400 text-md">
          Can&apos;t watch the video above? Grab some{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-200"
            href="https://faucet.polygon.technology/"
          >
            faucet change
          </a>{" "}
        </p>
        <p className="text-red-400 text-md mt-1">
          ... or mint the{" "}
          <Link href="/mint">
            <a
              target="_blank"
              el="noopener noreferrer"
              className="underline text-indigo-200"
            >
              access NFT
            </a>
          </Link>
          .{" "}
        </p>
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
