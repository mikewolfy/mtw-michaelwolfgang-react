import { useState } from 'react';

const RsaValidator = () => {
  const [originalData, setOriginalData] = useState('');
  const [signature, setSignature] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [algorithm, setAlgorithm] = useState('SHA-256');
  const [isValid, setIsValid] = useState(null);
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const importPublicKey = async (pemKey) => {
    try {
      // Remove PEM headers and whitespace
      const pemHeader = "-----BEGIN PUBLIC KEY-----";
      const pemFooter = "-----END PUBLIC KEY-----";
      let pemContents = pemKey.trim();
      
      if (pemContents.includes(pemHeader)) {
        pemContents = pemContents.substring(pemHeader.length);
      }
      if (pemContents.includes(pemFooter)) {
        pemContents = pemContents.substring(0, pemContents.indexOf(pemFooter));
      }
      
      pemContents = pemContents.replace(/\s/g, '');
      
      // Convert base64 to binary
      const binaryDer = atob(pemContents);
      const binaryDerArray = new Uint8Array(binaryDer.length);
      for (let i = 0; i < binaryDer.length; i++) {
        binaryDerArray[i] = binaryDer.charCodeAt(i);
      }
      
      // Import the key
      return await window.crypto.subtle.importKey(
        'spki',
        binaryDerArray.buffer,
        {
          name: 'RSASSA-PKCS1-v1_5',
          hash: algorithm,
        },
        true,
        ['verify']
      );
    } catch (err) {
      throw new Error('Failed to import public key. Please ensure it\'s in valid PEM format.');
    }
  };

  const base64ToArrayBuffer = (base64) => {
    try {
      const binaryString = atob(base64.replace(/\s/g, ''));
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    } catch (err) {
      throw new Error('Failed to decode signature. Please ensure it\'s valid base64.');
    }
  };

  const verifySignature = async () => {
    setIsVerifying(true);
    setError('');
    setIsValid(null);

    try {
      if (!originalData.trim()) {
        throw new Error('Please enter the original data.');
      }
      if (!signature.trim()) {
        throw new Error('Please enter the signature.');
      }
      if (!publicKey.trim()) {
        throw new Error('Please enter the public key.');
      }

      // Import the public key
      const cryptoKey = await importPublicKey(publicKey);

      // Convert the original data to buffer
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(originalData);

      // Convert the signature to buffer
      const signatureBuffer = base64ToArrayBuffer(signature);

      // Verify the signature
      const result = await window.crypto.subtle.verify(
        'RSASSA-PKCS1-v1_5',
        cryptoKey,
        signatureBuffer,
        dataBuffer
      );

      setIsValid(result);
    } catch (err) {
      setError(err.message || 'An error occurred during verification.');
      setIsValid(null);
    } finally {
      setIsVerifying(false);
    }
  };

  const clearAll = () => {
    setOriginalData('');
    setSignature('');
    setPublicKey('');
    setAlgorithm('SHA-256');
    setIsValid(null);
    setError('');
  };

  const loadExample = () => {
    // Example data for demonstration
    setOriginalData('Hello, World!');
    setSignature('Your base64 encoded signature here');
    setPublicKey(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Z+h8Hs9l3FGQHKm3rVH
Example public key - replace with your own
-----END PUBLIC KEY-----`);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
          RSA Signature Validator
        </h1>
        <p className="text-gray-600 text-lg">
          Verify RSA-signed strings using a public key
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        {/* Algorithm Selection */}
        <div className="mb-6">
          <label htmlFor="algorithm" className="block text-lg font-semibold text-gray-700 mb-2">
            Hash Algorithm:
          </label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="SHA-256">SHA-256</option>
            <option value="SHA-384">SHA-384</option>
            <option value="SHA-512">SHA-512</option>
            <option value="SHA-1">SHA-1 (deprecated)</option>
          </select>
        </div>

        {/* Original Data */}
        <div className="mb-6">
          <label htmlFor="original-data" className="block text-lg font-semibold text-gray-700 mb-2">
            Original Data:
          </label>
          <textarea
            id="original-data"
            value={originalData}
            onChange={(e) => setOriginalData(e.target.value)}
            placeholder="Enter the original message that was signed..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          />
        </div>

        {/* Signature */}
        <div className="mb-6">
          <label htmlFor="signature" className="block text-lg font-semibold text-gray-700 mb-2">
            Signature (Base64):
          </label>
          <textarea
            id="signature"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Enter the base64 encoded signature..."
            className="w-full h-24 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          />
        </div>

        {/* Public Key */}
        <div className="mb-6">
          <label htmlFor="public-key" className="block text-lg font-semibold text-gray-700 mb-2">
            Public Key (PEM format):
          </label>
          <textarea
            id="public-key"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
            placeholder="-----BEGIN PUBLIC KEY-----&#10;Your public key here...&#10;-----END PUBLIC KEY-----"
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={verifySignature}
            disabled={isVerifying}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isVerifying ? 'Verifying...' : 'Verify Signature'}
          </button>
          <button
            onClick={clearAll}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
          >
            Clear All
          </button>
          <button
            onClick={loadExample}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
          >
            Load Example
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 font-semibold">Error:</p>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Validation Result */}
        {isValid !== null && !error && (
          <div className={`p-6 rounded-lg border-2 ${
            isValid 
              ? 'bg-green-50 border-green-500' 
              : 'bg-red-50 border-red-500'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`text-4xl ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                {isValid ? '✓' : '✗'}
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isValid ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isValid ? 'Signature Valid' : 'Signature Invalid'}
                </h3>
                <p className={`text-sm ${
                  isValid ? 'text-green-700' : 'text-red-700'
                }`}>
                  {isValid 
                    ? 'The signature was successfully verified with the provided public key.' 
                    : 'The signature could not be verified. It may have been tampered with or the wrong key was used.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Information Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About RSA Signature Verification</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            RSA signature verification is a cryptographic process that confirms the authenticity and integrity 
            of a message using asymmetric cryptography.
          </p>
          
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">How it works:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Signing:</strong> The sender uses their private key to create a digital signature of the data</li>
              <li><strong>Verification:</strong> Anyone can use the sender's public key to verify the signature</li>
              <li><strong>Algorithm:</strong> Uses RSASSA-PKCS1-v1_5 with various hash functions (SHA-256, SHA-384, SHA-512)</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Input Requirements:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Original Data:</strong> The exact message that was signed (must match exactly)</li>
              <li><strong>Signature:</strong> Base64 encoded signature string</li>
              <li><strong>Public Key:</strong> PEM format public key (-----BEGIN PUBLIC KEY----- ... -----END PUBLIC KEY-----)</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Common Use Cases:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Verifying API responses and webhooks</li>
              <li>Authenticating software updates and downloads</li>
              <li>Validating document signatures</li>
              <li>Ensuring message integrity in secure communications</li>
            </ul>
          </div>

          <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded border border-yellow-200 mt-4">
            <strong>Security Note:</strong> All verification is performed locally in your browser using the Web Crypto API. 
            Your data, signatures, and keys never leave your device.
          </p>

          <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded border border-blue-200 mt-2">
            <strong>Tip:</strong> The original data must match exactly (including whitespace, line breaks, etc.) 
            for the signature verification to succeed.
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Example Public Key Format</h2>
        <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm border border-gray-200 font-mono">
{`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
mwIDAQAB
-----END PUBLIC KEY-----`}
        </pre>
      </div>
    </div>
  );
};

export default RsaValidator;
