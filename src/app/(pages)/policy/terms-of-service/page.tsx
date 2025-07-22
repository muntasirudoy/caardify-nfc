import React from "react";
import {
  FileText,
  Info,
  Shield,
  CreditCard,
  Lock,
  User,
  ShoppingCart,
  Activity,
  AlertCircle,
  Globe,
  Mail,
  FileCheck2,
  CircleDollarSign,
  ExternalLink,
  BadgePercent,
  Ban,
  RefreshCw,
  ThumbsUp,
} from "lucide-react";

const PolicySection = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
      {icon}
      {title}
    </h3>
    <div className="pl-7 text-gray-700 leading-relaxed">{children}</div>
  </div>
);

function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Terms of Service
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Effective Date: 01/03/2025
        </p>
      </div>

      <PolicySection
        icon={<Info className="w-5 h-5 text-blue-600" />}
        title="1. General Information"
      >
        <p>
          Caardify is a legally registered business in Bangladesh, operating as
          a sole proprietorship. The business offers digital business card
          services via NFC technology. Our contact details are available on the
          official website.
        </p>
      </PolicySection>

      <PolicySection
        icon={<User className="w-5 h-5 text-green-600" />}
        title="2. Account Registration & User Responsibilities"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Users must be at least 18 years old or have legal guardian consent.
          </li>
          <li>
            All information provided during registration must be accurate and up
            to date.
          </li>
          <li>
            Users are responsible for maintaining the confidentiality of their
            account credentials.
          </li>
          <li>
            Users must immediately notify Caardify of any unauthorized use of
            their account.
          </li>
          <li>
            Each user is allowed to register only one account unless otherwise
            approved.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<ShoppingCart className="w-5 h-5 text-yellow-600" />}
        title="3. Services & Products"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            We offer customizable NFC business cards with different designs and
            features.
          </li>
          <li>
            Additional accessories and services may be offered from time to
            time.
          </li>
          <li>
            All services are subject to availability and may change without
            prior notice.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<CreditCard className="w-5 h-5 text-purple-600" />}
        title="4. Payment, Subscription, Refund & Cancellation Policy"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>Payments are accepted via bKash mobile banking service only.</li>
          <li>
            Subscription fees, if any, will be charged on a monthly or annual
            basis as specified.
          </li>
          <li>
            Refunds are not available except where mandated by applicable law or
            at our sole discretion.
          </li>
          <li>
            Cancellation of services must be communicated at least 7 days before
            the next billing cycle.
          </li>
          <li>
            Failure to make timely payments may result in suspension or
            termination of service.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<Shield className="w-5 h-5 text-red-600" />}
        title="5. Intellectual Property"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            All platform content including designs, text, graphics, and software
            are owned or licensed by Caardify.
          </li>
          <li>
            Users may not copy, modify, distribute, or create derivative works
            from our content without explicit permission.
          </li>
          <li>
            Registered trademarks and service marks remain the property of their
            respective owners.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<AlertCircle className="w-5 h-5 text-pink-600" />}
        title="6. User Conduct & Restrictions"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Users shall not use the service to upload or distribute offensive,
            unlawful, or misleading content.
          </li>
          <li>
            Users shall not engage in any activity that disrupts or interferes
            with the platform’s functionality.
          </li>
          <li>
            Any violation may result in suspension or permanent termination of
            user accounts.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<Lock className="w-5 h-5 text-indigo-600" />}
        title="7. Privacy & Data Handling"
      >
        <p>
          Please refer to our Privacy Policy available on the website for
          detailed information about how we handle your data, including
          collection, storage, and sharing practices.
        </p>
      </PolicySection>

      <PolicySection
        icon={<FileText className="w-5 h-5 text-teal-600" />}
        title="8. Digital Business Card Usage Policy"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Users are responsible for the accuracy and legality of the
            information shared via the NFC business cards.
          </li>
          <li>
            Caardify is not liable for any consequences arising from the misuse
            of digital business cards.
          </li>
          <li>
            Users must not use the cards for unlawful or unauthorized commercial
            purposes.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<Mail className="w-5 h-5 text-cyan-600" />}
        title="9. Communications & Marketing"
      >
        <p>
          By using our service, users consent to receive transactional and
          promotional emails and messages, which they can opt out of at any time
          via provided links.
        </p>
      </PolicySection>

      <PolicySection
        icon={<Activity className="w-5 h-5 text-orange-600" />}
        title="10. Limitation of Liability & Dispute Resolution"
      >
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Caardify shall not be liable for indirect, incidental,
            consequential, or punitive damages arising from the use or inability
            to use our services.
          </li>
          <li>
            Any disputes shall first attempt resolution via mediation before
            pursuing legal action in Bangladesh courts.
          </li>
        </ul>
      </PolicySection>

      <PolicySection
        icon={<FileCheck2 className="w-5 h-5 text-emerald-600" />}
        title="11. Warranty Disclaimer"
      >
        <p>
          Our services are provided on an “as-is” and “as-available” basis
          without warranties of any kind, either express or implied.
        </p>
      </PolicySection>

      <PolicySection
        icon={<CircleDollarSign className="w-5 h-5 text-lime-600" />}
        title="12. Indemnification"
      >
        <p>
          Users agree to indemnify and hold harmless Caardify, its affiliates,
          employees, and agents from any claims, damages, or losses resulting
          from user actions violating these Terms.
        </p>
      </PolicySection>

      <PolicySection
        icon={<Globe className="w-5 h-5 text-violet-600" />}
        title="13. Service Availability & Downtime"
      >
        <p>
          While we strive for 24/7 availability, Caardify does not guarantee
          uninterrupted service and may perform maintenance that causes
          temporary downtime.
        </p>
      </PolicySection>

      <PolicySection
        icon={<ExternalLink className="w-5 h-5 text-fuchsia-600" />}
        title="14. Third-Party Services & Integrations"
      >
        <p>
          Caardify may integrate with third-party services but is not
          responsible for their content, privacy policies, or functionality.
        </p>
      </PolicySection>

      <PolicySection
        icon={<ThumbsUp className="w-5 h-5 text-pink-700" />}
        title="15. No Endorsement Disclaimer"
      >
        <p>
          Caardify does not endorse, verify, or assume responsibility for any
          user-generated content shared on the platform.
        </p>
      </PolicySection>

      <PolicySection
        icon={<Ban className="w-5 h-5 text-red-700" />}
        title="16. Force Majeure"
      >
        <p>
          We are not liable for failure or delay in performance due to causes
          beyond our reasonable control, including natural disasters, wars,
          strikes, or government actions.
        </p>
      </PolicySection>

      <PolicySection
        icon={<Globe className="w-5 h-5 text-blue-700" />}
        title="17. Governing Law & Jurisdiction"
      >
        <p>
          These Terms are governed by the laws of Bangladesh, and any disputes
          shall be subject to the exclusive jurisdiction of courts located in
          Bangladesh.
        </p>
      </PolicySection>

      <PolicySection
        icon={<BadgePercent className="w-5 h-5 text-yellow-700" />}
        title="18. Use of Promotional Offers & Discounts"
      >
        <p>
          Promotional offers and discounts are subject to specific terms and
          conditions and may be withdrawn at any time without notice.
        </p>
      </PolicySection>

      <PolicySection
        icon={<RefreshCw className="w-5 h-5 text-green-700" />}
        title="19. Amendments to Terms"
      >
        <p>
          Caardify reserves the right to amend these Terms at any time, with
          changes effective upon posting on the website.
        </p>
      </PolicySection>
    </div>
  );
}

export default TermsOfService;
