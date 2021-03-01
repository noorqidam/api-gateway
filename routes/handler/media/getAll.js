const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_DATA } = process.env;
const api = apiAdapter(URL_SERVICE_DATA);

module.exports = async (req, res) => {
  try {
    const media = await api.get("/media", req.body);
    return res.json(media.data);
  } catch (error) {}
};
