import { CashIcon, KeyIcon, UserGroupIcon } from "@heroicons/react/outline";
import Container from "../Container";

const features = [
  {
    name: "Own it",
    description:
      "Stored on the blockchain, you own your videos. Nobody can censor or take them down.",
    icon: KeyIcon,
  },
  {
    name: "Monetize it",
    description:
      "Video on demand, NFT access, subscription - it's your choice how you want to get paid.",
    icon: CashIcon,
  },
  {
    name: "Grow it",
    description:
      "Selling to your existing audience is cool, but you want to grow. We can help bring new fans to you.",
    icon: UserGroupIcon,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50 md:py-20">
      <Container>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            It&rsquo;s your content.
          </h2>
          <dl className="mt-8 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xl leading-6 font-bold text-gray-800 text-center">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-lg text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
};

export default Features;
