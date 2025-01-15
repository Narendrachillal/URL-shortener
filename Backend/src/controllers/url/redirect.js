import { Url } from "../../models/url.schema.js";
import { ApiResponse } from "../../utils/Api.response.js";

const redirect = async (req, res) => {
  try {
    const { short } = req.params;
    const urlRecord = await Url.findOne({ shortID: short });

    if (!urlRecord) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "Url does not exist"));
    }

    urlRecord.views += 1;
    await urlRecord.save();

    return res.status(302).redirect(urlRecord.Originalurl);
  } catch (err) {
    console.error("Error in redirect controller:", err);
    res.status(500).send(new ApiResponse(500, err, "Failed to redirect"));
  }
};

export { redirect };
