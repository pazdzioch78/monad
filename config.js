const config = {
  TIME_SLEEP: 10, //minutes
  MAX_THREADS: 10,
  PRIVATE_KEY_MAIN_WALLET: "xxx", //private key main wallet to send other wallet
  AMOUNT_SEND_FEE: [0.01, 0.05], //random amount monad send to other wallet
  PERCENT_TRANSACTION: [1, 5], //percent for each transactions, valid: 1 - 100 | % mỗi lần giao dịch theo tổng số dư hiện tại

  DELAY_START_BOT: [1, 2], //seconds

  ///captcha========
  TYPE_CAPTCHA: "2captcha", // valid values: 2captcha, anticaptcha
  API_KEY_2CAPTCHA: "xxx",
  API_KEY_ANTICAPTCHA: "xxx",
  CAPTCHA_URL: "https://testnet.monad.xyz/",
  WEBSITE_KEY: "6LcItOMqAAAAAF9ANohQEN4jGOjHRxU8f5MNJZHu",
};

module.exports = { config };
