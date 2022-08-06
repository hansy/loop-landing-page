import Link from "next/link";
import Container from "../Container";
import CtaForm from "../Cta/Form";

const Header = () => {
  return (
    <div className="text-center mt-8 mb-20 lg:mt-24 lg:mb-40">
      <Container>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl">
          <span className="block mb-4">Manage your videos in one place.</span>
          <span className="block xl:inline">
            Get paid <span className="rainbow">everywhere</span>.
          </span>
        </h1>
        <iframe
          src="https://app.getloop.xyz/0x2Caefce8cF1D7C3AB072BA13934FA6D08d54ba6F/videos/QmTgihxkQRghKKbib7hCSKbv2YhMZRQYhUs5LauZpwC8K1"
          className="w-full aspect-video rounded-lg mt-20 mb-5"
        />
        <p className="text-purple-400 text-2xl">
          Can&apos;t watch video above? Get change{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-200"
            href="https://faucet.polygon.technology/"
          >
            here
          </a>
          .{" "}
        </p>
        <p className="text-red-400 text-2xl">
          ... or mint the NFT{" "}
          <Link href="/mint">
          <a
            target="_blank"
            el="noopener noreferrer"
            className="underline text-indigo-200"
          >
            here
          </a>
          </Link>
          
          .{" "}
        </p>
        <div className="mt-16 mx-auto sm:flex sm:justify-center md:mt-20">
          <CtaForm buttonLabel="Join beta" placeholder="Email" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
