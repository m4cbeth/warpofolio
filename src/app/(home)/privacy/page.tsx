export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:text-gray-100 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p>
              By using this website, you agree to the collection and use of information in accordance with 
              this Privacy Policy. We are committed to protecting your privacy and being transparent about 
              what data we collect and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
            <p>
              We collect minimal information necessary to provide and improve our services:
            </p>
            <div className="mt-3 space-y-2">
              <p>
                <strong>Analytics Data:</strong> We collect basic site usage statistics such as page views, 
                visit duration, and general location (country/region level). This helps us understand how 
                our site is used and improve the user experience.
              </p>
              <p>
                <strong>Local Storage Data:</strong> Our applications store data locally in your browser 
                using localStorage and Jotai state management. This data never leaves your device unless 
                you explicitly export or share it.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies for basic site functionality and analytics:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for core functionality, including maintaining 
                your session and preferences stored in localStorage
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Used to understand site usage patterns and improve 
                our services (anonymous, aggregated data only)
              </li>
            </ul>
            <p className="mt-3">
              You can disable cookies through your browser settings, though this may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve and optimize the user experience</li>
              <li>Understand usage patterns and site performance</li>
              <li>Maintain functionality of our applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Storage & Security</h2>
            <p>
              Data you enter into our applications is stored locally on your device using browser localStorage. 
              We do not collect, store, or transmit this data to our servers. You are responsible for backing 
              up any important data.
            </p>
            <p className="mt-3">
              While we implement reasonable security measures for our site, no method of transmission over 
              the internet is 100% secure. We cannot guarantee absolute security of any data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <p>
              We may use third-party analytics services to help us understand site usage. These services 
              collect anonymous, aggregated data and are subject to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Clear your locally stored data at any time through your browser settings</li>
              <li>Disable cookies through your browser preferences</li>
              <li>Request information about data we collect (limited to analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect 
              personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated revision date. Continued use of the site after changes constitutes acceptance of 
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact 
              us through the information provided on this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}