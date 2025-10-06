export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:text-gray-100 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="text-sm text-gray-500 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using this website and its applications, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please discontinue use of the site immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Use of Service</h2>
            <p>
              This site provides web applications and tools for personal and professional use. You agree to use 
              the service only for lawful purposes and in accordance with these terms.
            </p>
            <p className="mt-3">
              You are responsible for maintaining the security of any data you input into our applications. 
              We are not liable for any loss or corruption of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Local Storage & Data</h2>
            <p>
              Our applications use browser localStorage to save your data locally on your device. This data 
              remains on your device and is not transmitted to our servers unless explicitly stated in a 
              particular application.
            </p>
            <p className="mt-3">
              You can clear this data at any time through your browser settings. We recommend regular backups 
              of any important data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
            <p>
              All content, features, and functionality of this site are owned by the site operator and are 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer of Warranties</h2>
            <p>
              This service is provided "as is" and "as available" without warranties of any kind, either 
              express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenues, whether 
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses 
              resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service after 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us through the information 
              provided on this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}