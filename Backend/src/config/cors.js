const whitelist = ["https://url-shortener-frontend-ochre-two.vercel.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error("Not allowed by CORS")); // Reject any other origin
    }
  },
};

export { corsOptions };
