const CiamResources = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">CIAM Technical Resources</h1>
        <p className="text-slate-500 text-lg">
          Blogs, practitioner communities, and learning paths to stay current on customer identity trends.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Blogs and Industry Updates</h2>
        <ul className="space-y-3 text-slate-700">
          <li>
            <a
              href="https://techcommunity.microsoft.com/t5/microsoft-entra-blog/bg-p/Identity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Microsoft Entra Blog
            </a>
            <p className="text-sm text-slate-500 mt-1">Official updates on identity security, governance, and new Entra capabilities.</p>
          </li>
          <li>
            <a
              href="https://www.okta.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Okta Developer and Product Blog
            </a>
            <p className="text-sm text-slate-500 mt-1">CIAM patterns, passkeys, lifecycle practices, and product announcements.</p>
          </li>
          <li>
            <a
              href="https://www.pingidentity.com/en/resources/blog.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Ping Identity Blog
            </a>
            <p className="text-sm text-slate-500 mt-1">Architectural guidance, Zero Trust topics, and CIAM strategy perspectives.</p>
          </li>
          <li>
            <a
              href="https://auth0.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Auth0 Blog
            </a>
            <p className="text-sm text-slate-500 mt-1">Developer-focused articles on OAuth, OIDC, and secure customer identity design.</p>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Practitioner Communities and Standards</h2>
        <ul className="space-y-3 text-slate-700">
          <li>
            <a
              href="https://idpro.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              IDPro
            </a>
            <p className="text-sm text-slate-500 mt-1">Professional association for IAM practitioners with community discussions and practical guidance.</p>
          </li>
          <li>
            <a
              href="https://openid.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              OpenID Foundation
            </a>
            <p className="text-sm text-slate-500 mt-1">Specifications and working groups for OIDC, shared signals, and identity interoperability.</p>
          </li>
          <li>
            <a
              href="https://www.ietf.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              IETF OAuth Working Group
            </a>
            <p className="text-sm text-slate-500 mt-1">Current and emerging RFCs relevant to OAuth 2.1, token security, and modern auth flows.</p>
          </li>
          <li>
            <a
              href="https://fidoalliance.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              FIDO Alliance
            </a>
            <p className="text-sm text-slate-500 mt-1">Passkey and phishing-resistant authentication standards and adoption resources.</p>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Training and Skill Development</h2>
        <ul className="space-y-3 text-slate-700">
          <li>
            <a
              href="https://learn.microsoft.com/en-us/training/browse/?products=entra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Microsoft Learn: Entra Training
            </a>
            <p className="text-sm text-slate-500 mt-1">Role-based learning paths and hands-on modules across identity and access scenarios.</p>
          </li>
          <li>
            <a
              href="https://idpro.org/cidpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              IDPro CIDPRO Certification
            </a>
            <p className="text-sm text-slate-500 mt-1">Vendor-neutral credential focused on modern IAM and CIAM practitioner competencies.</p>
          </li>
          <li>
            <a
              href="https://www.sans.org/cyber-security-courses/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              SANS Security Courses
            </a>
            <p className="text-sm text-slate-500 mt-1">Deep security engineering content helpful for strengthening identity threat defenses.</p>
          </li>
          <li>
            <a
              href="https://www.pluralsight.com/browse/software-development/software-security"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pluralsight: Identity and Security Courses
            </a>
            <p className="text-sm text-slate-500 mt-1">Practical courses for engineering teams building secure authentication and authorization flows.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CiamResources;
