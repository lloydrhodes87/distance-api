const axios = require('axios');

const apiCall = async (origin, destination, mode) => {
  try {
    return await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=${mode}&key=${
        process.env.API_KEY
      }`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = apiCall;
