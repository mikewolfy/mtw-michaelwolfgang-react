const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-200 pb-2">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
    {children}
  </div>
);

const CodeBlock = ({ children }) => (
  <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed my-3">
    <code>{children}</code>
  </pre>
);

const Callout = ({ type = 'info', title, children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-400 text-blue-800',
    warning: 'bg-amber-50 border-amber-400 text-amber-800',
    tip: 'bg-green-50 border-green-400 text-green-800',
    danger: 'bg-red-50 border-red-400 text-red-800',
  };
  return (
    <div className={`border-l-4 rounded-r-lg px-4 py-3 my-4 ${styles[type]}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  );
};

const Badge = ({ children, color = 'indigo' }) => {
  const colors = {
    indigo: 'bg-indigo-100 text-indigo-800',
    green: 'bg-green-100 text-green-800',
    amber: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-800',
    slate: 'bg-slate-100 text-slate-700',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold mr-1 ${colors[color]}`}>
      {children}
    </span>
  );
};

const ScopesAndClaims = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <span>Technical Docs</span>
          <span>›</span>
          <span className="text-indigo-600 font-medium">Scopes &amp; Claims</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Securing APIs with Scopes &amp; Claims
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          A practical guide to how OAuth 2.0 scopes and JWT claims work together to protect
          backend APIs — covering authorization flows, token validation, and enforcement patterns.
        </p>
      </div>

      {/* Overview */}
      <Section title="Overview">
        <p className="text-slate-700 leading-relaxed mb-4">
          Modern applications are composed of client apps (web, mobile, SPA) that call backend APIs.
          To ensure only authorized clients and users can access specific resources, we rely on two
          complementary mechanisms built into the{' '}
          <strong>OAuth 2.0</strong> and <strong>OpenID Connect (OIDC)</strong> standards:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="font-bold text-indigo-800 mb-1">Scopes</p>
            <p className="text-sm text-indigo-700">
              Define <em>what</em> a client application is allowed to do. They represent
              permissions requested against a resource server (your API).
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="font-bold text-purple-800 mb-1">Claims</p>
            <p className="text-sm text-purple-700">
              Carry <em>who</em> the user or client is. Structured as key-value pairs inside a
              JWT token, they convey identity, roles, and contextual data to your API.
            </p>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Together, scopes and claims allow an API to answer two fundamental security questions:{' '}
          <em>"Is this client allowed to call this endpoint?"</em> (scope) and{' '}
          <em>"Does this user have the right to access this specific data?"</em> (claims).
        </p>
      </Section>

      {/* OAuth 2.0 Token Flow */}
      <Section title="The Token Flow">
        <p className="text-slate-700 leading-relaxed mb-3">
          Before a client can call a protected API, it must obtain an{' '}
          <strong>access token</strong> from an authorization server (e.g., Azure AD, Auth0,
          Okta, Keycloak). The flow looks like this:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm mb-4 ml-2">
          <li>The client requests an access token, specifying desired <strong>scopes</strong>.</li>
          <li>The user authenticates and consents (for delegated flows).</li>
          <li>
            The authorization server issues a signed <strong>JWT access token</strong> containing
            granted scopes and identity <strong>claims</strong>.
          </li>
          <li>
            The client sends the token as a <code className="bg-slate-100 px-1 rounded">Bearer</code>{' '}
            token in the <code className="bg-slate-100 px-1 rounded">Authorization</code> header.
          </li>
          <li>
            The API validates the token signature, expiry, audience, scopes, and claims before
            serving the request.
          </li>
        </ol>
        <CodeBlock>{`GET /api/orders HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...`}</CodeBlock>
      </Section>

      {/* Scopes */}
      <Section title="Scopes">
        <p className="text-slate-700 leading-relaxed mb-4">
          Scopes are strings that represent a permission — either a broad category of access or a
          fine-grained operation on a resource. They are agreed upon between the client, the
          authorization server, and the API.
        </p>

        <SubSection title="Requesting Scopes">
          <p className="text-slate-700 text-sm mb-2">
            Scopes are requested in the OAuth authorization request and in client credential flows:
          </p>
          <CodeBlock>{`// Authorization Code Flow (user sign-in)
GET https://login.example.com/authorize
  ?response_type=code
  &client_id=my-spa-client
  &scope=openid profile email api://my-api/orders.read api://my-api/orders.write
  &redirect_uri=https://app.example.com/callback

// Client Credentials Flow (service-to-service)
POST https://login.example.com/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=my-service
&client_secret=...
&scope=api://my-api/.default`}</CodeBlock>
        </SubSection>

        <SubSection title="Scope Design Patterns">
          <p className="text-slate-700 text-sm mb-3">
            Well-designed scopes follow a consistent naming convention and granularity:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Scope</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Pattern</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['orders.read', 'resource.action', 'Read access to orders'],
                  ['orders.write', 'resource.action', 'Create and update orders'],
                  ['orders.delete', 'resource.action', 'Delete orders (elevated)'],
                  ['admin', 'role-like', 'Broad administrative access'],
                  ['api://my-api/.default', 'Azure AD app-level', 'All permissions the app has been granted'],
                  ['openid', 'OIDC standard', 'Issue an ID token (identity)'],
                  ['profile', 'OIDC standard', 'Include name/picture in ID token'],
                  ['email', 'OIDC standard', 'Include email address in ID token'],
                ].map(([scope, pattern, desc]) => (
                  <tr key={scope} className="hover:bg-slate-50">
                    <td className="px-3 py-2 border border-slate-200 font-mono text-indigo-700 text-xs">{scope}</td>
                    <td className="px-3 py-2 border border-slate-200 text-slate-500 text-xs">{pattern}</td>
                    <td className="px-3 py-2 border border-slate-200 text-slate-700">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SubSection>

        <Callout type="tip" title="Principle of Least Privilege">
          Each client should request only the minimum scopes it actually needs. Broad scopes like
          <code className="bg-green-100 px-1 rounded text-xs ml-1">admin</code> should be reserved
          for privileged back-office services, not public client apps.
        </Callout>
      </Section>

      {/* Claims */}
      <Section title="Claims">
        <p className="text-slate-700 leading-relaxed mb-4">
          Claims are assertions about the subject (user or client) embedded as key-value pairs
          inside a <strong>JSON Web Token (JWT)</strong>. They are cryptographically signed by the
          authorization server so that resource servers can trust them without calling back.
        </p>

        <SubSection title="Standard JWT Claims (RFC 7519)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Claim</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Full Name</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-semibold text-slate-700">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['sub', 'Subject', 'Unique identifier of the user or principal'],
                  ['iss', 'Issuer', 'URL of the authorization server that issued the token'],
                  ['aud', 'Audience', 'Intended recipient(s) — your API must verify this'],
                  ['exp', 'Expiration', 'Unix timestamp after which the token is invalid'],
                  ['iat', 'Issued At', 'Unix timestamp when the token was issued'],
                  ['nbf', 'Not Before', 'Token is not valid before this timestamp'],
                  ['jti', 'JWT ID', 'Unique identifier for replay detection'],
                ].map(([claim, name, purpose]) => (
                  <tr key={claim} className="hover:bg-slate-50">
                    <td className="px-3 py-2 border border-slate-200 font-mono text-indigo-700 text-xs">{claim}</td>
                    <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium text-xs">{name}</td>
                    <td className="px-3 py-2 border border-slate-200 text-slate-700">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SubSection>

        <SubSection title="Common Identity Claims (OIDC / Azure AD)">
          <p className="text-slate-700 text-sm mb-3">
            Identity providers add their own claims to access and ID tokens:
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {['name', 'email', 'given_name', 'family_name', 'tid', 'oid', 'preferred_username',
              'roles', 'groups', 'scp', 'azp', 'appid', 'upn', 'unique_name'].map(c => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
          <CodeBlock>{`// Decoded JWT access token payload (Azure AD example)
{
  "iss": "https://login.microsoftonline.com/{tenant-id}/v2.0",
  "sub": "AadOid|00000000-0000-0000-0000-000000000001",
  "aud": "api://my-api",
  "exp": 1712520000,
  "iat": 1712516400,
  "nbf": 1712516400,

  // User identity
  "oid":   "00000000-0000-0000-0000-000000000001",  // Immutable user object ID
  "tid":   "11111111-1111-1111-1111-111111111111",  // Azure AD tenant ID
  "upn":   "michael@example.com",
  "name":  "Michael Wolfgang",
  "email": "michael@example.com",

  // Authorization
  "scp":   "orders.read orders.write",              // Delegated scopes (space-separated)
  "roles": ["Orders.Manager", "Reports.Viewer"],    // App role assignments

  // Client info
  "azp":   "client-app-id",                        // Authorized party (client that requested token)
  "appid": "your-api-app-id"
}`}</CodeBlock>
        </SubSection>

        <SubSection title="The scp Claim vs the roles Claim">
          <p className="text-slate-700 text-sm mb-3">
            Two claims are especially important for API authorization and are often confused:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="font-bold text-indigo-800 mb-1 font-mono">scp (or scope)</p>
              <p className="text-sm text-indigo-700 mb-2">
                Delegated permissions — <strong>what the user has consented to let the app do on their behalf</strong>.
                Only present in delegated (user + app) token flows.
              </p>
              <Badge color="indigo">Delegated Flow Only</Badge>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="font-bold text-purple-800 mb-1 font-mono">roles</p>
              <p className="text-sm text-purple-700 mb-2">
                Application roles — <strong>permissions assigned to the app or user in the directory</strong>.
                Present in both delegated and client credentials flows.
              </p>
              <Badge color="amber">Delegated &amp; App-Only</Badge>
            </div>
          </div>
        </SubSection>
      </Section>

      {/* API Validation */}
      <Section title="Validating Tokens in a Backend API">
        <p className="text-slate-700 leading-relaxed mb-4">
          Every API endpoint that requires authentication <strong>must</strong> independently
          validate the incoming token. Never trust a token that has been forwarded without
          re-validation. The validation steps are:
        </p>

        <SubSection title="Step 1 — Verify the Signature">
          <p className="text-slate-700 text-sm mb-2">
            The JWT is signed with the authorization server's private key. Fetch the public
            signing keys from the well-known JWKS endpoint and verify the signature.
          </p>
          <CodeBlock>{`// Node.js / Express example using 'jose' library
import { createRemoteJWKSet, jwtVerify } from 'jose';

const JWKS = createRemoteJWKSet(
  new URL('https://login.microsoftonline.com/{tenant-id}/discovery/v2.0/keys')
);

async function verifyToken(authHeader) {
  const token = authHeader?.replace('Bearer ', '');
  if (!token) throw new Error('Missing token');

  const { payload } = await jwtVerify(token, JWKS, {
    issuer:   'https://login.microsoftonline.com/{tenant-id}/v2.0',
    audience: 'api://my-api',
  });
  return payload;  // Returns decoded, verified claims object
}`}</CodeBlock>
        </SubSection>

        <SubSection title="Step 2 — Validate Standard Claims">
          <p className="text-slate-700 text-sm mb-2">
            After signature verification, check the token's metadata claims:
          </p>
          <CodeBlock>{`function validateStandardClaims(claims) {
  const now = Math.floor(Date.now() / 1000);

  if (claims.exp < now)
    throw new Error('Token has expired');

  if (claims.nbf && claims.nbf > now)
    throw new Error('Token not yet valid');

  if (claims.aud !== 'api://my-api')
    throw new Error('Invalid audience — token not intended for this API');

  if (claims.iss !== 'https://login.microsoftonline.com/{tenant-id}/v2.0')
    throw new Error('Invalid issuer');
}`}</CodeBlock>
          <Callout type="warning" title="Always verify the audience (aud)">
            A token issued for a different API is valid within that system but must be rejected by
            yours. Skipping audience validation is a common vulnerability — it allows token
            substitution attacks.
          </Callout>
        </SubSection>

        <SubSection title="Step 3 — Enforce Scopes">
          <p className="text-slate-700 text-sm mb-2">
            Check that the token contains the required scope before processing the request:
          </p>
          <CodeBlock>{`// Middleware: require a specific scope
function requireScope(requiredScope) {
  return (req, res, next) => {
    const claims = req.claims;  // Attached by token verification middleware
    const scopes = (claims.scp || claims.scope || '').split(' ');

    if (!scopes.includes(requiredScope)) {
      return res.status(403).json({
        error: 'insufficient_scope',
        message: \`Required scope: \${requiredScope}\`,
      });
    }
    next();
  };
}

// Usage on routes
app.get('/api/orders',         requireScope('orders.read'),   getOrders);
app.post('/api/orders',        requireScope('orders.write'),  createOrder);
app.delete('/api/orders/:id',  requireScope('orders.delete'), deleteOrder);`}</CodeBlock>
        </SubSection>

        <SubSection title="Step 4 — Enforce Claims-Based Authorization">
          <p className="text-slate-700 text-sm mb-2">
            Scopes confirm <em>what the client can do</em>; claims confirm <em>what data the user can touch</em>.
            Use claims for fine-grained row-level and resource-level access control:
          </p>
          <CodeBlock>{`// Only return orders belonging to the authenticated user
app.get('/api/orders', requireScope('orders.read'), async (req, res) => {
  const { sub, oid, roles } = req.claims;

  // Admins see all orders; regular users see only their own
  const filter = roles?.includes('Orders.Manager')
    ? {}                        // No filter — full access
    : { ownerId: oid };         // Scoped to their user object ID

  const orders = await db.orders.findMany({ where: filter });
  res.json(orders);
});

// Verify the caller owns the resource before returning it
app.get('/api/orders/:id', requireScope('orders.read'), async (req, res) => {
  const order = await db.orders.findById(req.params.id);

  if (!order) return res.status(404).json({ error: 'Not found' });

  // Claim-based ownership check
  const isOwner = order.ownerId === req.claims.oid;
  const isAdmin = req.claims.roles?.includes('Orders.Manager');

  if (!isOwner && !isAdmin)
    return res.status(403).json({ error: 'Access denied' });

  res.json(order);
});`}</CodeBlock>
        </SubSection>

        <SubSection title="ASP.NET Core Example">
          <p className="text-slate-700 text-sm mb-2">
            The same pattern in C# using the Microsoft.Identity.Web library:
          </p>
          <CodeBlock>{`// Program.cs — configure JWT bearer authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

builder.Services.AddAuthorization(options => {
  options.AddPolicy("OrdersRead",  p => p.RequireClaim("scp", "orders.read"));
  options.AddPolicy("OrdersWrite", p => p.RequireClaim("scp", "orders.write"));
  options.AddPolicy("AdminOnly",   p => p.RequireRole("Orders.Manager"));
});

// OrdersController.cs
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class OrdersController : ControllerBase
{
  [HttpGet]
  [Authorize(Policy = "OrdersRead")]
  public async Task<IActionResult> GetOrders()
  {
      var userId = User.FindFirstValue("oid");  // Read the oid claim
      var isAdmin = User.IsInRole("Orders.Manager");

      var orders = isAdmin
          ? await _repo.GetAllOrders()
          : await _repo.GetOrdersByOwner(userId);

      return Ok(orders);
  }
}`}</CodeBlock>
        </SubSection>
      </Section>

      {/* Service-to-Service */}
      <Section title="Service-to-Service (App-Only) Tokens">
        <p className="text-slate-700 leading-relaxed mb-4">
          When a backend service calls another API without a user in the loop (daemon services,
          background workers, microservices), use the <strong>Client Credentials</strong> flow.
          These tokens carry <code className="bg-slate-100 px-1 rounded text-sm">roles</code> instead
          of <code className="bg-slate-100 px-1 rounded text-sm">scp</code>.
        </p>
        <CodeBlock>{`// Detecting app-only vs delegated token
function isAppOnlyToken(claims) {
  // Delegated tokens have a non-zero 'scp' and a real 'sub'
  // App-only tokens have no 'scp' and 'sub' equals the application's object ID
  return !claims.scp && claims.idtyp === 'app';
}

app.get('/api/internal/reports', async (req, res) => {
  const claims = req.claims;

  if (isAppOnlyToken(claims)) {
    // App-only: check app roles
    if (!claims.roles?.includes('Reports.Viewer'))
      return res.status(403).json({ error: 'App role required' });
  } else {
    // Delegated: check scope AND user identity
    requireScope('orders.read')(req, res, () => {});
  }
  // handle request ...
});`}</CodeBlock>
      </Section>

      {/* Best Practices */}
      <Section title="Best Practices">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: '🔒',
              title: 'Always validate on the API',
              body: 'Never rely on the client to enforce scopes. Every API endpoint must validate the token independently.',
              type: 'danger',
            },
            {
              icon: '🎯',
              title: 'Validate the audience',
              body: 'Always check the aud claim matches your API identifier to prevent token substitution attacks.',
              type: 'danger',
            },
            {
              icon: '⚡',
              title: 'Keep tokens short-lived',
              body: 'Access tokens should expire in 15–60 minutes. Use refresh tokens to obtain new ones without re-authentication.',
              type: 'warning',
            },
            {
              icon: '🔑',
              title: 'Least privilege scopes',
              body: 'Request only the minimum scopes needed. Avoid issuing /.default or admin-level scopes to user-facing apps.',
              type: 'tip',
            },
            {
              icon: '📋',
              title: 'Prefer immutable claims',
              body: 'Use oid (object ID) rather than email or name as user identifiers — those can change.',
              type: 'info',
            },
            {
              icon: '🚫',
              title: 'Never trust without verification',
              body: 'Never decode a JWT and use its claims without first verifying the signature. Treat unverified tokens as untrusted input.',
              type: 'danger',
            },
            {
              icon: '📝',
              title: 'Log for auditability',
              body: 'Log the sub (or oid), azp, and granted scopes on each API call. Avoid logging the raw token.',
              type: 'info',
            },
            {
              icon: '🔄',
              title: 'Rotate signing keys',
              body: 'Use the JWKS endpoint to dynamically discover signing keys. Cache with a short TTL and refresh on key ID (kid) miss.',
              type: 'tip',
            },
          ].map(({ icon, title, body, type }) => (
            <Callout key={title} type={type} title={`${icon}  ${title}`}>
              {body}
            </Callout>
          ))}
        </div>
      </Section>

      {/* Common Pitfalls */}
      <Section title="Common Pitfalls">
        <ul className="space-y-3 text-slate-700 text-sm">
          {[
            {
              pitfall: 'Skipping audience validation',
              fix: 'Always verify aud matches your API client ID / app URI.',
            },
            {
              pitfall: 'Checking scopes client-side only',
              fix: 'The API must re-validate every token — the client can be compromised.',
            },
            {
              pitfall: 'Using the ID token to call APIs',
              fix: 'ID tokens are for identity; use the access token for API authorization.',
            },
            {
              pitfall: 'Storing tokens in localStorage',
              fix: 'Use HttpOnly cookies or in-memory storage; localStorage is readable by any script.',
            },
            {
              pitfall: 'Long-lived access tokens',
              fix: 'Short expiry + refresh tokens is safer than long-lived tokens.',
            },
            {
              pitfall: 'Ignoring the nbf claim',
              fix: 'Validate not-before to prevent replay of pre-issued tokens.',
            },
            {
              pitfall: 'Hardcoding public keys',
              fix: 'Always fetch keys dynamically from the JWKS endpoint to support key rotation.',
            },
            {
              pitfall: 'Roles defined only in the token, not the directory',
              fix: 'App roles assigned in the authorization server / directory are authoritative; do not let users self-assign roles via token manipulation.',
            },
          ].map(({ pitfall, fix }) => (
            <li key={pitfall} className="flex gap-2">
              <span className="text-red-500 font-bold flex-shrink-0">✗</span>
              <div>
                <span className="font-semibold text-red-700">{pitfall}</span>
                <span className="text-slate-500 mx-2">→</span>
                <span className="text-green-700">{fix}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* References */}
      <Section title="Further Reading">
        <ul className="space-y-2 text-sm">
          {[
            ['OAuth 2.0 Framework', 'https://datatracker.ietf.org/doc/html/rfc6749', 'RFC 6749'],
            ['JSON Web Token (JWT)', 'https://datatracker.ietf.org/doc/html/rfc7519', 'RFC 7519'],
            ['OpenID Connect Core', 'https://openid.net/specs/openid-connect-core-1_0.html', 'openid.net'],
            ['Microsoft Identity Platform', 'https://learn.microsoft.com/en-us/entra/identity-platform/', 'Microsoft Learn'],
            ['OWASP API Security Top 10', 'https://owasp.org/www-project-api-security/', 'owasp.org'],
            ['OAuth 2.0 Security Best Current Practice', 'https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics', 'RFC Draft'],
          ].map(([title, url, source]) => (
            <li key={title} className="flex items-center gap-2">
              <span className="text-indigo-400">›</span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium"
              >
                {title}
              </a>
              <span className="text-slate-400 text-xs">({source})</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default ScopesAndClaims;
