        var RSAKey = /** @class */
            (function() {
                function RSAKey() {
                    this.n = null;
                    this.e = 0;
                    this.d = null;
                    this.p = null;
                    this.q = null;
                    this.dmp1 = null;
                    this.dmq1 = null;
                    this.coeff = null;
                }
                //#region PROTECTED
                // protected
                // RSAKey.prototype.doPublic = RSADoPublic;
                // Perform raw public operation on "x": return x^e (mod n)
                RSAKey.prototype.doPublic = function(x) {
                    return x.modPowInt(this.e, this.n);
                }
                ;
                // RSAKey.prototype.doPrivate = RSADoPrivate;
                // Perform raw private operation on "x": return x^d (mod n)
                RSAKey.prototype.doPrivate = function(x) {
                    if (this.p == null || this.q == null) {
                        return x.modPow(this.d, this.n);
                    }
                    // TODO: re-calculate any missing CRT params
                    var xp = x.mod(this.p).modPow(this.dmp1, this.p);
                    var xq = x.mod(this.q).modPow(this.dmq1, this.q);
                    while (xp.compareTo(xq) < 0) {
                        xp = xp.add(this.p);
                    }
                    return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
                }
                ;
                //#endregion PROTECTED
                //#region PUBLIC
                // RSAKey.prototype.setPublic = RSASetPublic;
                // Set the public key fields N and e from hex strings
                RSAKey.prototype.setPublic = function(N, E) {
                    if (N != null && E != null && N.length > 0 && E.length > 0) {
                        this.n = parseBigInt(N, 16);
                        this.e = parseInt(E, 16);
                    } else {
                        console.error("Invalid RSA public key");
                    }
                }
                ;
                // RSAKey.prototype.encrypt = RSAEncrypt;
                // Return the PKCS#1 RSA encryption of "text" as an even-length hex string
                RSAKey.prototype.encrypt = function(text) {
                    var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
                    if (m == null) {
                        return null;
                    }
                    var c = this.doPublic(m);
                    if (c == null) {
                        return null;
                    }
                    var h = c.toString(16);
                    if ((h.length & 1) == 0) {
                        return h;
                    } else {
                        return "0" + h;
                    }
                }
                ;
                // RSAKey.prototype.setPrivate = RSASetPrivate;
                // Set the private key fields N, e, and d from hex strings
                RSAKey.prototype.setPrivate = function(N, E, D) {
                    if (N != null && E != null && N.length > 0 && E.length > 0) {
                        this.n = parseBigInt(N, 16);
                        this.e = parseInt(E, 16);
                        this.d = parseBigInt(D, 16);
                    } else {
                        console.error("Invalid RSA private key");
                    }
                }
                ;
                // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
                // Set the private key fields N, e, d and CRT params from hex strings
                RSAKey.prototype.setPrivateEx = function(N, E, D, P, Q, DP, DQ, C) {
                    if (N != null && E != null && N.length > 0 && E.length > 0) {
                        this.n = parseBigInt(N, 16);
                        this.e = parseInt(E, 16);
                        this.d = parseBigInt(D, 16);
                        this.p = parseBigInt(P, 16);
                        this.q = parseBigInt(Q, 16);
                        this.dmp1 = parseBigInt(DP, 16);
                        this.dmq1 = parseBigInt(DQ, 16);
                        this.coeff = parseBigInt(C, 16);
                    } else {
                        console.error("Invalid RSA private key");
                    }
                }
                ;
                // RSAKey.prototype.generate = RSAGenerate;
                // Generate a new random private key B bits long, using public expt E
                RSAKey.prototype.generate = function(B, E) {
                    var rng = new SecureRandom();
                    var qs = B >> 1;
                    this.e = parseInt(E, 16);
                    var ee = new BigInteger(E,16);
                    for (; ; ) {
                        for (; ; ) {
                            this.p = new BigInteger(B - qs,1,rng);
                            if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
                                break;
                            }
                        }
                        for (; ; ) {
                            this.q = new BigInteger(qs,1,rng);
                            if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
                                break;
                            }
                        }
                        if (this.p.compareTo(this.q) <= 0) {
                            var t = this.p;
                            this.p = this.q;
                            this.q = t;
                        }
                        var p1 = this.p.subtract(BigInteger.ONE);
                        var q1 = this.q.subtract(BigInteger.ONE);
                        var phi = p1.multiply(q1);
                        if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                            this.n = this.p.multiply(this.q);
                            this.d = ee.modInverse(phi);
                            this.dmp1 = this.d.mod(p1);
                            this.dmq1 = this.d.mod(q1);
                            this.coeff = this.q.modInverse(this.p);
                            break;
                        }
                    }
                }
                ;
                // RSAKey.prototype.decrypt = RSADecrypt;
                // Return the PKCS#1 RSA decryption of "ctext".
                // "ctext" is an even-length hex string and the output is a plain string.
                RSAKey.prototype.decrypt = function(ctext) {
                    var c = parseBigInt(ctext, 16);
                    var m = this.doPrivate(c);
                    if (m == null) {
                        return null;
                    }
                    return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
                }
                ;
                // Generate a new random private key B bits long, using public expt E
                RSAKey.prototype.generateAsync = function(B, E, callback) {
                    var rng = new SecureRandom();
                    var qs = B >> 1;
                    this.e = parseInt(E, 16);
                    var ee = new BigInteger(E,16);
                    var rsa = this;
                    // These functions have non-descript names because they were originally for(;;) loops.
                    // I don't know about cryptography to give them better names than loop1-4.
                    var loop1 = function() {
                        var loop4 = function() {
                            if (rsa.p.compareTo(rsa.q) <= 0) {
                                var t = rsa.p;
                                rsa.p = rsa.q;
                                rsa.q = t;
                            }
                            var p1 = rsa.p.subtract(BigInteger.ONE);
                            var q1 = rsa.q.subtract(BigInteger.ONE);
                            var phi = p1.multiply(q1);
                            if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                                rsa.n = rsa.p.multiply(rsa.q);
                                rsa.d = ee.modInverse(phi);
                                rsa.dmp1 = rsa.d.mod(p1);
                                rsa.dmq1 = rsa.d.mod(q1);
                                rsa.coeff = rsa.q.modInverse(rsa.p);
                                setTimeout(function() {
                                    callback();
                                }, 0);
                                // escape
                            } else {
                                setTimeout(loop1, 0);
                            }
                        };
                        var loop3 = function() {
                            rsa.q = nbi();
                            rsa.q.fromNumberAsync(qs, 1, rng, function() {
                                rsa.q.subtract(BigInteger.ONE).gcda(ee, function(r) {
                                    if (r.compareTo(BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                                        setTimeout(loop4, 0);
                                    } else {
                                        setTimeout(loop3, 0);
                                    }
                                });
                            });
                        };
                        var loop2 = function() {
                            rsa.p = nbi();
                            rsa.p.fromNumberAsync(B - qs, 1, rng, function() {
                                rsa.p.subtract(BigInteger.ONE).gcda(ee, function(r) {
                                    if (r.compareTo(BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                                        setTimeout(loop3, 0);
                                    } else {
                                        setTimeout(loop2, 0);
                                    }
                                });
                            });
                        };
                        setTimeout(loop2, 0);
                    };
                    setTimeout(loop1, 0);
                }
                ;
                RSAKey.prototype.sign = function(text, digestMethod, digestName) {
                    var header = getDigestHeader(digestName);
                    var digest = header + digestMethod(text).toString();
                    var m = pkcs1pad1(digest, this.n.bitLength() / 4);
                    if (m == null) {
                        return null;
                    }
                    var c = this.doPrivate(m);
                    if (c == null) {
                        return null;
                    }
                    var h = c.toString(16);
                    if ((h.length & 1) == 0) {
                        return h;
                    } else {
                        return "0" + h;
                    }
                }
                ;
                RSAKey.prototype.verify = function(text, signature, digestMethod) {
                    var c = parseBigInt(signature, 16);
                    var m = this.doPublic(c);
                    if (m == null) {
                        return null;
                    }
                    var unpadded = m.toString(16).replace(/^1f+00/, "");
                    var digest = removeDigestHeader(unpadded);
                    return digest == digestMethod(text).toString();
                }
                ;
                return RSAKey;
            }());
        
        var JSEncryptRSAKey = /** @class */
            (function(_super) {
                __extends(JSEncryptRSAKey, _super);
                function JSEncryptRSAKey(key) {
                    var _this = _super.call(this) || this;
                    // Call the super constructor.
                    //  RSAKey.call(this);
                    // If a key key was provided.
                    if (key) {
                        // If this is a string...
                        if (typeof key === "string") {
                            _this.parseKey(key);
                        } else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) {
                            // Set the values for the key.
                            _this.parsePropertiesFrom(key);
                        }
                    }
                    return _this;
                }
                /**
     * Method to parse a pem encoded string containing both a public or private key.
     * The method will translate the pem encoded string in a der encoded string and
     * will parse private key and public key parameters. This method accepts public key
     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
     *
     * @todo Check how many rsa formats use the same format of pkcs #1.
     *
     * The format is defined as:
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * it's possible to examine the structure of the keys obtained from openssl using
     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
     * @private
     */
                JSEncryptRSAKey.prototype.parseKey = function(pem) {
                    try {
                        var modulus = 0;
                        var public_exponent = 0;
                        var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
                        var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
                        var asn1 = ASN1.decode(der);
                        // Fixes a bug with OpenSSL 1.0+ private keys
                        if (asn1.sub.length === 3) {
                            asn1 = asn1.sub[2].sub[0];
                        }
                        if (asn1.sub.length === 9) {
                            // Parse the private key.
                            modulus = asn1.sub[1].getHexStringValue();
                            // bigint
                            this.n = parseBigInt(modulus, 16);
                            public_exponent = asn1.sub[2].getHexStringValue();
                            // int
                            this.e = parseInt(public_exponent, 16);
                            var private_exponent = asn1.sub[3].getHexStringValue();
                            // bigint
                            this.d = parseBigInt(private_exponent, 16);
                            var prime1 = asn1.sub[4].getHexStringValue();
                            // bigint
                            this.p = parseBigInt(prime1, 16);
                            var prime2 = asn1.sub[5].getHexStringValue();
                            // bigint
                            this.q = parseBigInt(prime2, 16);
                            var exponent1 = asn1.sub[6].getHexStringValue();
                            // bigint
                            this.dmp1 = parseBigInt(exponent1, 16);
                            var exponent2 = asn1.sub[7].getHexStringValue();
                            // bigint
                            this.dmq1 = parseBigInt(exponent2, 16);
                            var coefficient = asn1.sub[8].getHexStringValue();
                            // bigint
                            this.coeff = parseBigInt(coefficient, 16);
                        } else if (asn1.sub.length === 2) {
                            // Parse the public key.
                            var bit_string = asn1.sub[1];
                            var sequence = bit_string.sub[0];
                            modulus = sequence.sub[0].getHexStringValue();
                            this.n = parseBigInt(modulus, 16);
                            public_exponent = sequence.sub[1].getHexStringValue();
                            this.e = parseInt(public_exponent, 16);
                        } else {
                            return false;
                        }
                        return true;
                    } catch (ex) {
                        return false;
                    }
                }
                ;
                /**
     * Translate rsa parameters in a hex encoded string representing the rsa key.
     *
     * The translation follow the ASN.1 notation :
     * RSAPrivateKey ::= SEQUENCE {
     *   version           Version,
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER,  -- e
     *   privateExponent   INTEGER,  -- d
     *   prime1            INTEGER,  -- p
     *   prime2            INTEGER,  -- q
     *   exponent1         INTEGER,  -- d mod (p1)
     *   exponent2         INTEGER,  -- d mod (q-1)
     *   coefficient       INTEGER,  -- (inverse of q) mod p
     * }
     * @returns {string}  DER Encoded String representing the rsa private key
     * @private
     */
                JSEncryptRSAKey.prototype.getPrivateBaseKey = function() {
                    var options = {
                        array: [new KJUR.asn1.DERInteger({
                            int: 0
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.n
                        }), new KJUR.asn1.DERInteger({
                            int: this.e
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.d
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.p
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.q
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.dmp1
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.dmq1
                        }), new KJUR.asn1.DERInteger({
                            bigint: this.coeff
                        })]
                    };
                    var seq = new KJUR.asn1.DERSequence(options);
                    return seq.getEncodedHex();
                }
                ;
                /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
                JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function() {
                    return hex2b64(this.getPrivateBaseKey());
                }
                ;
                /**
     * Translate rsa parameters in a hex encoded string representing the rsa public key.
     * The representation follow the ASN.1 notation :
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * @returns {string} DER Encoded String representing the rsa public key
     * @private
     */
                JSEncryptRSAKey.prototype.getPublicBaseKey = function() {
                    var first_sequence = new KJUR.asn1.DERSequence({
                        array: [new KJUR.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new KJUR.asn1.DERNull()]
                    });
                    var second_sequence = new KJUR.asn1.DERSequence({
                        array: [new KJUR.asn1.DERInteger({
                            bigint: this.n
                        }), new KJUR.asn1.DERInteger({
                            int: this.e
                        })]
                    });
                    var bit_string = new KJUR.asn1.DERBitString({
                        hex: "00" + second_sequence.getEncodedHex()
                    });
                    var seq = new KJUR.asn1.DERSequence({
                        array: [first_sequence, bit_string]
                    });
                    return seq.getEncodedHex();
                }
                ;
                /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */
                JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function() {
                    return hex2b64(this.getPublicBaseKey());
                }
                ;
                /**
     * wrap the string in block of width chars. The default value for rsa keys is 64
     * characters.
     * @param {string} str the pem encoded string without header and footer
     * @param {Number} [width=64] - the length the string has to be wrapped at
     * @returns {string}
     * @private
     */
                JSEncryptRSAKey.wordwrap = function(str, width) {
                    width = width || 64;
                    if (!str) {
                        return str;
                    }
                    var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
                    return str.match(RegExp(regex, "g")).join("\n");
                }
                ;
                /**
     * Retrieve the pem encoded private key
     * @returns {string} the pem encoded private key with header/footer
     * @public
     */
                JSEncryptRSAKey.prototype.getPrivateKey = function() {
                    var key = "-----BEGIN RSA PRIVATE KEY-----\n";
                    key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
                    key += "-----END RSA PRIVATE KEY-----";
                    return key;
                }
                ;
                /**
     * Retrieve the pem encoded public key
     * @returns {string} the pem encoded public key with header/footer
     * @public
     */
                JSEncryptRSAKey.prototype.getPublicKey = function() {
                    var key = "-----BEGIN PUBLIC KEY-----\n";
                    key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
                    key += "-----END PUBLIC KEY-----";
                    return key;
                }
                ;
                /**
     * Check if the object contains the necessary parameters to populate the rsa modulus
     * and public exponent parameters.
     * @param {Object} [obj={}] - An object that may contain the two public key
     * parameters
     * @returns {boolean} true if the object contains both the modulus and the public exponent
     * properties (n and e)
     * @todo check for types of n and e. N should be a parseable bigInt object, E should
     * be a parseable integer number
     * @private
     */
                JSEncryptRSAKey.hasPublicKeyProperty = function(obj) {
                    obj = obj || {};
                    return (obj.hasOwnProperty("n") && obj.hasOwnProperty("e"));
                }
                ;
                /**
     * Check if the object contains ALL the parameters of an RSA key.
     * @param {Object} [obj={}] - An object that may contain nine rsa key
     * parameters
     * @returns {boolean} true if the object contains all the parameters needed
     * @todo check for types of the parameters all the parameters but the public exponent
     * should be parseable bigint objects, the public exponent should be a parseable integer number
     * @private
     */
                JSEncryptRSAKey.hasPrivateKeyProperty = function(obj) {
                    obj = obj || {};
                    return (obj.hasOwnProperty("n") && obj.hasOwnProperty("e") && obj.hasOwnProperty("d") && obj.hasOwnProperty("p") && obj.hasOwnProperty("q") && obj.hasOwnProperty("dmp1") && obj.hasOwnProperty("dmq1") && obj.hasOwnProperty("coeff"));
                }
                ;
                /**
     * Parse the properties of obj in the current rsa object. Obj should AT LEAST
     * include the modulus and public exponent (n, e) parameters.
     * @param {Object} obj - the object containing rsa parameters
     * @private
     */
                JSEncryptRSAKey.prototype.parsePropertiesFrom = function(obj) {
                    this.n = obj.n;
                    this.e = obj.e;
                    if (obj.hasOwnProperty("d")) {
                        this.d = obj.d;
                        this.p = obj.p;
                        this.q = obj.q;
                        this.dmp1 = obj.dmp1;
                        this.dmq1 = obj.dmq1;
                        this.coeff = obj.coeff;
                    }
                }
                ;
                return JSEncryptRSAKey;
            }(RSAKey))

var JSEncrypt = /** @class */
            (function() {
                function JSEncrypt(options) {
                    options = options || {};
                    this.default_key_size = parseInt(options.default_key_size, 10) || 1024;
                    this.default_public_exponent = options.default_public_exponent || "010001";
                    // 65537 default openssl public exponent for rsa key type
                    this.log = options.log || false;
                    // The private and public key.
                    this.key = null;
                }
                /**
     * Method to set the rsa key parameter (one method is enough to set both the public
     * and the private key, since the private key contains the public key paramenters)
     * Log a warning if logs are enabled
     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
     * @public
     */
                JSEncrypt.prototype.setKey = function(key) {
                    if (this.log && this.key) {
                        console.warn("A key was already set, overriding existing.");
                    }
                    this.key = new JSEncryptRSAKey(key);
                }
                ;
                /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
                JSEncrypt.prototype.setPrivateKey = function(privkey) {
                    // Create the key.
                    this.setKey(privkey);
                }
                ;
                /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */
                JSEncrypt.prototype.setPublicKey = function(pubkey) {
                    // Sets the public key.
                    this.setKey(pubkey);
                }
                ;
                /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public
     */
                JSEncrypt.prototype.decrypt = function(str) {
                    // Return the decrypted string.
                    try {
                        return this.getKey().decrypt(b64tohex(str));
                    } catch (ex) {
                        return false;
                    }
                }
                ;
                /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public
     */
                JSEncrypt.prototype.encrypt = function(str) {
                    // Return the encrypted string.
                    try {
                        return hex2b64(this.getKey().encrypt(str));
                    } catch (ex) {
                        return false;
                    }
                }
                ;
                /**
     * Proxy method for RSAKey object's sign.
     * @param {string} str the string to sign
     * @param {function} digestMethod hash method
     * @param {string} digestName the name of the hash algorithm
     * @return {string} the signature encoded in base64
     * @public
     */
                JSEncrypt.prototype.sign = function(str, digestMethod, digestName) {
                    // return the RSA signature of 'str' in 'hex' format.
                    try {
                        return hex2b64(this.getKey().sign(str, digestMethod, digestName));
                    } catch (ex) {
                        return false;
                    }
                }
                ;
                /**
     * Proxy method for RSAKey object's verify.
     * @param {string} str the string to verify
     * @param {string} signature the signature encoded in base64 to compare the string to
     * @param {function} digestMethod hash method
     * @return {boolean} whether the data and signature match
     * @public
     */
                JSEncrypt.prototype.verify = function(str, signature, digestMethod) {
                    // Return the decrypted 'digest' of the signature.
                    try {
                        return this.getKey().verify(str, b64tohex(signature), digestMethod);
                    } catch (ex) {
                        return false;
                    }
                }
                ;
                /**
     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
     * will be created and returned
     * @param {callback} [cb] the callback to be called if we want the key to be generated
     * in an async fashion
     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
     * @public
     */
                JSEncrypt.prototype.getKey = function(cb) {
                    // Only create new if it does not exist.
                    if (!this.key) {
                        // Get a new private key.
                        this.key = new JSEncryptRSAKey();
                        if (cb && {}.toString.call(cb) === "[object Function]") {
                            this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                            return;
                        }
                        // Generate the key.
                        this.key.generate(this.default_key_size, this.default_public_exponent);
                    }
                    return this.key;
                }
                ;
                /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITH header and footer
     * @public
     */
                JSEncrypt.prototype.getPrivateKey = function() {
                    // Return the private representation of this key.
                    return this.getKey().getPrivateKey();
                }
                ;
                /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITHOUT header and footer
     * @public
     */
                JSEncrypt.prototype.getPrivateKeyB64 = function() {
                    // Return the private representation of this key.
                    return this.getKey().getPrivateBaseKeyB64();
                }
                ;
                /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITH header and footer
     * @public
     */
                JSEncrypt.prototype.getPublicKey = function() {
                    // Return the private representation of this key.
                    return this.getKey().getPublicKey();
                }
                ;
                /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITHOUT header and footer
     * @public
     */
                JSEncrypt.prototype.getPublicKeyB64 = function() {
                    // Return the private representation of this key.
                    return this.getKey().getPublicBaseKeyB64();
                }
                ;
                JSEncrypt.version = "3.0.0-rc.1";
                return JSEncrypt;
            }());


function getpwd(pwd){
    var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCRD8YahHualjGxPMzeIWnAqVGMIrWrrkr5L7gw+5XT55iIuYXZYLaUFMTOD9iSyfKlL9mvD3ReUX6Lieph3ajJAPPGEuSHwoj5PN1UiQXK3wzAPKcpwrrA2V4Agu1/RZsyIuzboXgcPexyUYxYUTJH48DeYBGJe2GrYtsmzuIu6QIDAQAB";
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    dataJson.password = encrypt.encrypt(pwd);

}