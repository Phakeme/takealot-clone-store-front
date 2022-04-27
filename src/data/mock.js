const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const Mock = new MockAdapter(axios);
export default Mock;
