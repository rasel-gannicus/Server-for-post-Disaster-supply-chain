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
    client.connect();

    const supplies = client.db("Medical_Supply").collection("supplies");
    const testimonials = client.db("Medical_Supply").collection("testimonials");

    // --- getting all the supplies
    app.get("/supplies", async (req, res) => {
      const query = {};
      const cursor = supplies.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // --- getting single supply details
    app.get('/supplies/:id', async(req, res)=>{
      const params = req.params;
      const {id} = params ; 
      const query = {_id : new ObjectId(id)};
      const result = await supplies.findOne(query);
      res.send(result) ; 
    })

    // --- add a new supply post 
    app.post("/dashboard/create-supply", async (req, res) => {
      const data = req.body;
      const result = await supplies.insertOne(data);
      res.send(result);
    });

    // --- edit a supply
    app.patch('/dashboard/edit-supply/:id', async(req, res)=>{
      const params = req.params ; 
      const {id} = params ; 
      const data = req.body ; 
      const filter = {_id : new ObjectId(id)};
      const update = {$set : data} ;

      const result = await supplies.updateOne(filter, update) ;
      // console.log(data);
      res.send(result) ;
    })

    // --- delete a supply
    app.delete('/dashboard/delete-supply/:id', async(req, res)=>{
      const params = req.params;
      const {id} = params;
      const query = {_id : new ObjectId(id)};
      const result =  await supplies.deleteOne(query);
      res.send(result);
    })

    // --- get testimonials data
    app.get("/testimonials", async (req, res) => {
      const query = {};
      const cursor = testimonials.find(query);
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
  console.log("Listening to port,",port);
});
