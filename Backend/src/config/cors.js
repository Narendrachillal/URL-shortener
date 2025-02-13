const whitelist = [
  "http://localhost:5173", // For local testing
  "https://url-shortener-frontend-ochre-two.vercel.app/" // Deployed frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin:", origin); // Debugging
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"], // Explicitly allow these methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  credentials: true,
};

export { corsOptions };
