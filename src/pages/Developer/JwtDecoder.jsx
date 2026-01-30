import { useState } from 'react';

const JwtDecoder = () => {
  const [jwt, setJwt] = useState('');
  const [decodedHeader, setDecodedHeader] = useState(null);
  const [decodedPayload, setDecodedPayload] = useState(null);
  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');

  const decodeJwt = (token) => {
    try {
      setError('');
      
      if (!token.trim()) {
        setDecodedHeader(null);
        setDecodedPayload(null);
        setSignature('');
        return;
      }

      const parts = token.split('.');
      
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format. A JWT should have 3 parts separated by dots.');
      }

      // Decode header
      const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
      setDecodedHeader(header);

      // Decode payload
      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      setDecodedPayload(payload);

      // Store signature (not decoded as it's encrypted)
      setSignature(parts[2]);

    } catch (err) {
      setError(err.message || 'Failed to decode JWT. Please ensure it\'s a valid JWT token.');
      setDecodedHeader(null);
      setDecodedPayload(null);
      setSignature('');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setJwt(value);
    decodeJwt(value);
  };

  const clearAll = () => {
    setJwt('');
    setDecodedHeader(null);
    setDecodedPayload(null);
    setSignature('');
    setError('');
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    } catch {
      return timestamp;
    }
  };

  const renderPayloadWithTimestamps = (payload) => {
    if (!payload) return null;

    const enhancedPayload = { ...payload };
    
    // Add human-readable versions of common timestamp fields
    if (payload.exp) {
      enhancedPayload.exp_readable = formatTimestamp(payload.exp);
    }
    if (payload.iat) {
      enhancedPayload.iat_readable = formatTimestamp(payload.iat);
    }
    if (payload.nbf) {
      enhancedPayload.nbf_readable = formatTimestamp(payload.nbf);
    }

    return enhancedPayload;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          JWT Decoder
        </h1>
        <p className="text-gray-600 text-lg">
          Decode and inspect JSON Web Tokens (JWT)
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="mb-6">
          <label htmlFor="jwt-input" className="block text-lg font-semibold text-gray-700 mb-2">
            Paste your JWT token here:
          </label>
          <textarea
            id="jwt-input"
            value={jwt}
            onChange={handleInputChange}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          />
          {jwt && (
            <button
              onClick={clearAll}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-semibold">Error:</p>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!error && (decodedHeader || decodedPayload) && (
          <div className="space-y-6">
            {/* Header Section */}
            {decodedHeader && (
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Header</h2>
                <pre className="bg-white p-4 rounded-lg overflow-x-auto text-sm border border-blue-100">
                  {JSON.stringify(decodedHeader, null, 2)}
                </pre>
              </div>
            )}

            {/* Payload Section */}
            {decodedPayload && (
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Payload</h2>
                <pre className="bg-white p-4 rounded-lg overflow-x-auto text-sm border border-green-100">
                  {JSON.stringify(renderPayloadWithTimestamps(decodedPayload), null, 2)}
                </pre>
                
                {/* Common Claims Explanation */}
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-700">Common JWT Claims:</p>
                  {decodedPayload.iss && <p><strong>iss:</strong> Issuer</p>}
                  {decodedPayload.sub && <p><strong>sub:</strong> Subject</p>}
                  {decodedPayload.aud && <p><strong>aud:</strong> Audience</p>}
                  {decodedPayload.exp && <p><strong>exp:</strong> Expiration Time</p>}
                  {decodedPayload.nbf && <p><strong>nbf:</strong> Not Before</p>}
                  {decodedPayload.iat && <p><strong>iat:</strong> Issued At</p>}
                  {decodedPayload.jti && <p><strong>jti:</strong> JWT ID</p>}
                </div>
              </div>
            )}

            {/* Signature Section */}
            {signature && (
              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Signature</h2>
                <div className="bg-white p-4 rounded-lg overflow-x-auto text-sm border border-purple-100">
                  <p className="font-mono break-all">{signature}</p>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  <strong>Note:</strong> The signature is encrypted and cannot be decoded. 
                  It's used to verify that the token hasn't been tampered with.
                </p>
              </div>
            )}
          </div>
        )}

        {!jwt && (
          <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
            <p className="text-gray-600">
              Enter a JWT token above to decode and view its contents
            </p>
            <p className="text-sm text-gray-500 mt-2">
              JWTs consist of three parts: Header, Payload, and Signature
            </p>
          </div>
        )}
      </div>

      {/* Information Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About JWT Tokens</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained 
            way for securely transmitting information between parties as a JSON object.
          </p>
          <p>
            <strong>Structure:</strong> A JWT consists of three parts separated by dots (.):
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Header:</strong> Contains the token type (JWT) and signing algorithm</li>
            <li><strong>Payload:</strong> Contains the claims (statements about an entity and additional data)</li>
            <li><strong>Signature:</strong> Used to verify the sender and ensure the message wasn't changed</li>
          </ul>
          <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded border border-yellow-200">
            <strong>Security Note:</strong> This decoder only decodes the JWT locally in your browser. 
            The token is never sent to any server. However, be cautious about pasting sensitive tokens 
            in any online tool.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JwtDecoder;
