const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const uri =
  "mongodb+srv://shafikrasel5:YoZQRmzumtu9s0QQ@cluster0.bm8swql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const supplies = client.db("Medical_Supply").collection("supplies");

    app.post("/postBlog", async (req, res) => {
      const data = req.body;
      const result = await portfolioDb.insertOne(data);
      res.send(result);
    });

    // --- getting all the blogs
    app.get("/supplies", async (req, res) => {
      const query = {};
      const cursor = supplies.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Ok got it");
});

app.listen(port, () => {
  console.log("Listening to port 5001");
});
