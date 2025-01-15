import { redirect } from "./url/redirect.js";
import { shrinkUrl } from "./url/shrinkUrl.js";
import { views } from "./url/views.js";

const urlController = {
  shrink: shrinkUrl,
  redirect: redirect,
  analytics: views,
};

export { urlController };
