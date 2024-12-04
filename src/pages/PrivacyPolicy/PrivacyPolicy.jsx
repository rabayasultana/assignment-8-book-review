
const PrivacyPolicy = () => {
    return (
        <div className="w-1/2 mx-auto my-10 p-10 bg-green-50 shadow animate__animated animate__fadeInUp">
        <h2 className="text-4xl text-center font-bold mb-12 text-green-800">
          Privacy Policy
        </h2>

        <div>
          <ul className="list-disc space-y-2">
            <li>
              We collect personal information you provide when making a
              reservation, such as name, contact details, and payment
              information.
            </li>
            <li>
              We may also collect information about your use of our website,
              such as browsing history and preferences. This information is used
              to improve your user experience and personalize our services.
            </li>
            <li>
              We use your information to process reservations, communicate with
              you about your stay, and send you promotional offers (with your
              consent).
            </li>
            <li>
              We will not share your personal information with third parties
              without your consent, except as required by law.
            </li>
            <li>
              We take appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </li>
            <li>
              You have the right to access, update, or delete your personal
              information. You can also opt out of receiving promotional emails
              from us.
            </li>
            <li>
              This privacy policy is subject to change. We will inform you of
              any changes by posting the revised privacy policy on our website.
            </li>
          </ul>
        </div>
      </div>
    );
};

export default PrivacyPolicy;