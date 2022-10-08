export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;



  // "@material-ui/core": "^4.12.4",
  // "@material-ui/lab": "^4.0.0-alpha.61",
  // "@mui/lab": "^5.0.0-alpha.91",
  // "@mui/material": "^5.9.1",
  // "@mui/styles": "^5.9.1",
  // "@testing-library/jest-dom": "^5.16.4",
  // "@testing-library/react": "^13.3.0",
  // "@testing-library/user-event": "^13.5.0",
  // "axios": "^0.27.2",
  // "chart.js": "^3.8.0",
  // "react": "^17.0.2",
  // "react-alice-carousel": "^2.6.4",
  // "react-dom": "^17.0.2",
  // "react-router-dom": "^5.3.3",
  // "react-scripts": "5.0.1",
  // "web-vitals": "^2.1.4"