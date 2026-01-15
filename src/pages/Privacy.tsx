import './Privacy.css'

function Privacy() {
  return (
    <div className="privacy">
      <section className="privacy-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="subtitle">How We Protect Your Information</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-section">
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>1. Introduction</h2>
            <p>
              Chemical House ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website. This policy is in compliance with:
            </p>
            <ul>
              <li>The Information Technology Act, 2000</li>
              <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal 
                  Data or Information) Rules, 2011</li>
              <li>The Digital Personal Data Protection Act, 2023</li>
              <li>Other applicable Indian laws and regulations</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register on our website or create an account</li>
              <li>Place an order or request a quote</li>
              <li>Contact us through our contact forms or email</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Apply for employment opportunities</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name, email address, phone number, and postal address</li>
              <li>Company name and business details</li>
              <li>Payment information (processed through secure third-party payment gateways)</li>
              <li>Resume, employment history, and other information provided during job applications</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              that are installed on your device.
            </p>

            <h3>2.3 Sensitive Personal Data or Information</h3>
            <p>
              As defined under the Information Technology (Reasonable Security Practices and Procedures and 
              Sensitive Personal Data or Information) Rules, 2011, sensitive personal data includes:
            </p>
            <ul>
              <li>Password</li>
              <li>Financial information such as bank account or credit card or debit card or other payment 
                  instrument details</li>
              <li>Physical, physiological and mental health condition</li>
              <li>Sexual orientation</li>
              <li>Medical records and history</li>
              <li>Biometric information</li>
              <li>Any detail relating to the above clauses as provided to us for providing service</li>
              <li>Any of the information received under above clauses by us for processing, stored or processed 
                  under lawful contract or otherwise</li>
            </ul>
            <p>
              We collect sensitive personal data only when necessary for providing our services and with your 
              explicit consent.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders and requests</li>
              <li>Communicate with you about your orders, inquiries, and our services</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Evaluate and process job applications and employment inquiries</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your 
            information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with third-party service 
                  providers who perform services on our behalf, such as payment processing, shipping, 
                  and data analysis. These service providers are contractually obligated to maintain the 
                  confidentiality and security of your information and are prohibited from using your 
                  information for any purpose other than providing services to us.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, 
                  court order, or government regulation, or to protect our rights and safety. This includes 
                  compliance with requests from Indian law enforcement agencies, regulatory authorities, 
                  or courts of competent jurisdiction.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of 
                  assets, your information may be transferred as part of that transaction. We will notify 
                  you of any such change in ownership or control of your personal information.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit, 
                  informed, and unambiguous consent.</li>
            </ul>
            <p>
              <strong>Cross-Border Data Transfer:</strong> If we transfer your personal data outside India, 
              we will ensure that appropriate safeguards are in place as required by applicable Indian laws, 
              including the Digital Personal Data Protection Act, 2023.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction, 
              in accordance with the Information Technology (Reasonable Security Practices and Procedures 
              and Sensitive Personal Data or Information) Rules, 2011. However, no method of transmission 
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>
              Our security measures include:
            </p>
            <ul>
              <li>Encryption of sensitive data during transmission using industry-standard protocols (SSL/TLS)</li>
              <li>Secure storage of personal information with access controls</li>
              <li>Regular security assessments, vulnerability testing, and updates</li>
              <li>Access controls and employee training on data protection</li>
              <li>Firewall and intrusion detection systems</li>
              <li>Regular backups and disaster recovery procedures</li>
            </ul>
            <p>
              <strong>Data Breach Notification:</strong> In the event of a data breach that may cause harm 
              to individuals, we will notify the affected users and the relevant authorities as required by 
              applicable Indian laws, including the Digital Personal Data Protection Act, 2023.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted 
              by law. For job applications, we may retain your information for a reasonable period to 
              consider you for future opportunities, unless you request deletion.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under Indian law and our privacy practices, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal 
                  and contractual obligations</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent for data processing where applicable</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the Contact 
              section below.
            </p>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store 
              certain information. By using our website, you consent to the use of cookies in accordance 
              with this Privacy Policy. You can instruct your browser to refuse all cookies or to indicate 
              when a cookie is being sent. However, if you do not accept cookies, you may not be able to use 
              some portions of our website.
            </p>
            <p>
              <strong>Types of Cookies We Use:</strong>
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser settings. For more information on 
              how to control cookies, please visit your browser's help section.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies 
              of any third-party sites you visit.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
              advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>12. Grievance Officer</h2>
            <p>
              In accordance with the Information Technology Act, 2000, the Information Technology 
              (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal 
              Data Protection Act, 2023, we have appointed a Grievance Officer to address any concerns 
              or complaints regarding data protection, privacy violations, or any other grievances related to 
              our website.
            </p>
            <p>
              <strong>Grievance Redressal Process:</strong>
            </p>
            <ul>
              <li>All grievances will be acknowledged within 24 hours of receipt</li>
              <li>We will address and resolve your grievance within 30 days from the date of receipt</li>
              <li>If the grievance requires more time, we will inform you of the reasons and the expected 
                  timeline for resolution</li>
            </ul>
            <p>
              You may contact our Grievance Officer at:
            </p>
            <p>
              <strong>Grievance Officer</strong><br />
              Chemical House<br />
              <strong>Head Office:</strong><br />
              66/1727, Vee Kay Tower, T.A.Beeran Kunju Road<br />
              Ernakulam North, Kochi – 18, Kerala, India<br />
              Tel: +91 484 401 7551, +91 9539015353<br />
              Email: privacy@chemicalhouse.com or chemicalhouseinfo@gmail.com
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Chemical House</strong><br />
              <strong>Head Office:</strong><br />
              66/1727, Vee Kay Tower, T.A.Beeran Kunju Road<br />
              Ernakulam North, Kochi – 18, Kerala, India<br />
              Tel: +91 484 401 7551, +91 9539015353<br />
              Email: chemicalhouseinfo@gmail.com<br /><br />
              <strong>Branch Office:</strong><br />
              TC- 4/2099/6, Mispah, Meads Lane<br />
              University P.O. Palayam, Thiruvananthapuram-34, Kerala, India<br />
              Tel: +91 471 4017551, 8129099912, 8129099978<br />
              Email: chemicalhouse41@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
