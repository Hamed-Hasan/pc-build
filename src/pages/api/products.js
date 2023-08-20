const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `mongodb+srv://pc-cloud:${process.env.DB_PASS}@cluster0.sxqbkvj.mongodb.net/pc-cloud?retryWrites=true&w=majority`;
const uri = `mongodb://localhost:27017`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client.db("pc-cloud").collection("products");

    if (req.method === "GET") {
      const product = await productsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: product });
    }
  } finally {
  }
}
export default run;
