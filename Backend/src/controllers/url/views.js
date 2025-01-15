import { Url } from "../../models/url.schema.js";
import { ApiResponse } from "../../utils/Api.response.js";

const views = async (req, res) => {
  try {
    const { short } = req.params;

    // Log the incoming shortID for debugging
    console.log("Fetching views for shortID:", short);

    if (!short) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "shortID parameter is required"));
    }

    const exist = await Url.findOne({ shortID: short });

    if (!exist) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, "URL does not exist"));
    }

    // Return the view count
    res
      .status(200)
      .send(
        new ApiResponse(
          200,
          { views: exist.views },
          "Views fetched successfully."
        )
      );
  } catch (err) {
    console.error("Error fetching views:", err);
    res
      .status(500)
      .send(new ApiResponse(500, err.message, "Internal server error"));
  }
};

export { views };
