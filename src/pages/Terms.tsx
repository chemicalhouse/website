import './Terms.css'

function Terms() {
  return (
    <div className="terms">
      <section className="terms-hero">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="subtitle">Terms of Use for Chemical House</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-section">
            <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>

            <h2>2. Use License and User Responsibilities</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Chemical House's 
              website for personal, non-commercial transitory viewing only. This is the grant of a license, 
              not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              <strong>Prohibited Activities:</strong> In accordance with the Information Technology Act, 2000 
              and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 
              2021, you agree not to:
            </p>
            <ul>
              <li>Host, display, upload, modify, publish, transmit, update, or share any information that is 
                  defamatory, obscene, pornographic, paedophilic, invasive of another's privacy, hateful, or 
                  racially or ethnically objectionable</li>
              <li>Infringe upon any intellectual property rights, including copyrights, trademarks, patents, 
                  or trade secrets</li>
              <li>Impersonate another person or entity</li>
              <li>Upload or transmit any computer viruses, worms, or malicious code</li>
              <li>Engage in any activity that violates any applicable Indian laws or regulations</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Use the website for any unlawful purpose or in any way that could damage, disable, or 
                  impair the website</li>
            </ul>

            <h2>3. Hiring and Employment Terms</h2>
            <p>
              Chemical House may post job openings and employment opportunities on this website. By 
              applying for any position through this website or any other channel:
            </p>
            <ul>
              <li>You acknowledge that all information provided in your application is accurate and truthful</li>
              <li>You understand that false or misleading information may result in immediate disqualification</li>
              <li>You consent to background verification and reference checks as part of the hiring process</li>
              <li>You agree that Chemical House reserves the right to reject any application without providing reasons</li>
              <li>You understand that employment terms, including compensation and benefits, will be as per 
                  company policy and applicable Indian labor laws</li>
              <li>You acknowledge that any offer of employment is subject to successful completion of 
                  background checks and medical examinations where applicable</li>
            </ul>

            <h2>4. Product Information and Disclaimers</h2>
            <p>
              The materials on Chemical House's website are provided on an 'as is' basis. Chemical House 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability, fitness for 
              a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Chemical House does not warrant or make any representations concerning the accuracy, likely 
              results, or reliability of the use of the materials on its website or otherwise relating to 
              such materials or on any sites linked to this site.
            </p>

            <h2>5. Regulatory Compliance</h2>
            <p>
              All products listed on this website are subject to applicable Indian laws and regulations, 
              including but not limited to:
            </p>
            <ul>
              <li>The Chemicals and Chemical Products (Regulation) Act and related rules</li>
              <li>The Environment (Protection) Act, 1986</li>
              <li>The Hazardous Waste (Management, Handling and Transboundary Movement) Rules, 2016</li>
              <li>The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989</li>
              <li>The Consumer Protection Act, 2019</li>
              <li>State-specific regulations in Kerala and other Indian states</li>
              <li>Any other applicable laws, rules, and regulations governing the sale and distribution 
                  of chemicals in India</li>
            </ul>
            <p>
              Certain products, including but not limited to pesticides, fertilizers, and acids, require 
              special licenses and permits. Chemical House will only supply such products to customers 
              who possess the necessary regulatory approvals and documentation. By placing an order, you 
              represent and warrant that you have all necessary licenses, permits, and authorizations 
              required to purchase, store, and use the products ordered.
            </p>
            <p>
              <strong>Compliance with E-commerce Rules:</strong> This website operates in compliance with 
              the Consumer Protection (E-Commerce) Rules, 2020, where applicable.
            </p>

            <h2>6. Limitations</h2>
            <p>
              In no event shall Chemical House or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Chemical House's website, even 
              if Chemical House or a Chemical House authorized representative has been notified orally or 
              in writing of the possibility of such damage.
            </p>

            <h2>7. Accuracy of Materials</h2>
            <p>
              The materials appearing on Chemical House's website could include technical, typographical, 
              or photographic errors. Chemical House does not warrant that any of the materials on its 
              website are accurate, complete, or current. Chemical House may make changes to the materials 
              contained on its website at any time without notice.
            </p>

            <h2>8. Links</h2>
            <p>
              Chemical House has not reviewed all of the sites linked to its website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply endorsement 
              by Chemical House of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>9. Modifications</h2>
            <p>
              Chemical House may revise these terms of service for its website at any time. We will 
              notify users of any material changes by posting the updated terms on this page and updating 
              the "Last Updated" date. Your continued use of the website after such modifications constitutes 
              your acceptance of the revised terms. If you do not agree to the modified terms, you must 
              discontinue use of the website.
            </p>
            <p>
              We recommend that you review these Terms and Conditions periodically to stay informed of 
              any updates.
            </p>

            <h2>10. Governing Law and Dispute Resolution</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India 
              and the state of Kerala, without regard to conflict of law principles. Any disputes arising from 
              the use of this website or these Terms and Conditions shall be subject to the exclusive 
              jurisdiction of the courts in Ernakulam, Kerala, India.
            </p>
            <p>
              <strong>Alternative Dispute Resolution:</strong> In case of any dispute, the parties agree 
              to first attempt to resolve the matter through good faith negotiations. If the dispute cannot 
              be resolved through negotiations, the parties may agree to resolve it through mediation or 
              arbitration in accordance with the Arbitration and Conciliation Act, 1996, before resorting 
              to court proceedings.
            </p>
            <p>
              <strong>Limitation Period:</strong> Any claim or cause of action arising out of or related to 
              these Terms and Conditions must be filed within the applicable limitation period as prescribed 
              under Indian law, typically within three years from the date the cause of action arose.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For any questions regarding these Terms and Conditions, please contact us at:
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

export default Terms
