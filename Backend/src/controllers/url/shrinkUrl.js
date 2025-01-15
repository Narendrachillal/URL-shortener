import { Url } from "../../models/url.schema.js";
import crypto from "crypto";
import { ApiResponse } from "../../utils/Api.response.js";

const shrinkUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(404).send(new ApiResponse(404, "enter valid URL"));
    }
    let shortID = crypto.randomBytes(2).toString("hex");

    const exist = await Url.findOne({ shortID });

    while (exist) {
      shortID = crypto.getRandomBytes(2).toString("hex");
    }

    const createdUrl = await Url.create({
      Originalurl: url,
      shortID: shortID,
    });
    console.log(createdUrl);
    // const data = await createdUrl;
    res
      .status(201)
      .send(new ApiResponse(201, createdUrl, "url shrinked succesfully"));
  } catch (err) {
    console.log(err);
    res.status(500).send(new ApiResponse(500, err, "Failed shrink th URL."));
  }
};
export { shrinkUrl };
