module.exports = {
    jwtSecret: 'your_jwt_secret',
    mongoURI: 'your_mongodb_uri',
    tokenExpiry: '1h', // Token expiry time for reset password links
    resetLimitTime: 24 * 60 * 60 * 1000, 
    passwordGeneratorOptions: {
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: false,
      symbols: false
    }
  };
  