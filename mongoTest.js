const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
  process.exit(0);
})
.catch((err) => {
  console.error("❌ Connection Failed:", err.message);
  process.exit(1);
});
