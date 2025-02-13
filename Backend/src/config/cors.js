const whitelist = [
  "http://localhost:5173", 
  "https://url-shortener-frontend-ochre-two.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("Origin received:", origin || "No Origin (likely Postman or server-to-server request)");

    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.error("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true,
};

export { corsOptions };
