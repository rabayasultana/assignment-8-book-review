const PrivacyPolicy = () => {
  return (
    <div className="w-1/2 mx-auto my-10 p-10 bg-green-50 shadow animate__animated animate__fadeInUp">
      <h2 className="text-4xl text-center font-bold mb-12 text-green-800">
        Privacy Policy
      </h2>

      <div>
        <ul className="list-disc space-y-2">
          <li>
            We collect personal information you provide when creating an account
            or posting a review, such as your name, contact details, and
            preferences.
          </li>
          <li>
            We may also collect information about your use of our website, such
            as browsing history, book ratings, reviews, and your reading
            preferences. This information helps us improve your user experience
            and personalize book recommendations.
          </li>
          <li>
            We use your information to facilitate account management, process
            your reviews, communicate with you about your activities, and send
            you personalized book recommendations or promotional offers (with
            your consent).
          </li>
          <li>
            We will not share your personal information with third parties
            without your consent, except as required by law or for purposes
            related to the operation of the site (e.g., payment processing).
          </li>
          <li>
            We take appropriate security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction.
          </li>
          <li>
            You have the right to access, update, or delete your personal
            information. You can also opt out of receiving promotional emails or
            notifications from us.
          </li>
          <li>
            This privacy policy may change from time to time. We will notify you
            of any changes by posting the updated privacy policy on our website.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
