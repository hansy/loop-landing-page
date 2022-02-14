import { useState } from "react";
import { post } from "../../util/request";

const CtaForm = ({ buttonLabel, placeholder }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;

    setEmail(val);
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await post("/api/users", { email });

      setEmail("");
      setMessage("Email received! Thank you so much! We'll be in touch!");
    } catch (e) {
      setMessage("There was an error adding your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={submit}
        action="/api/users"
        className="sm:mx-auto sm:max-w-lg sm:flex"
      >
        <div className="min-w-0 flex-1">
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            className="bg-gray-50 block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
            placeholder={placeholder}
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
            disabled={isSubmitting}
          >
            {buttonLabel}
          </button>
        </div>
      </form>
      <p className="text-gray-50 my-3 text-center">{message}</p>
    </div>
  );
};

export default CtaForm;
