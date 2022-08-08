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
      "Video on demand, NFT access, subscription - it's your choice how you want your content accessed.",
    icon: CashIcon,
  },
  {
    name: "Grow it",
    description:
      "Let others distribute your awesome content and bring new fans in new places to your work.",
    icon: UserGroupIcon,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <Container>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-3xl">
            It&apos;s your content.
          </h2>
          <dl className="mt-12 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
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
