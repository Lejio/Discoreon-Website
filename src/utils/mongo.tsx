import { MongoClient, Db } from "mongodb";

class MongoConnection {
  private static instance: MongoConnection;
  private client: MongoClient;
  private db: Db;

  private constructor() {
    // Initialize your MongoDB connection here
    this.client = new MongoClient(process.env.MONGO_URI!);
    this.db = this.client.db("pokemon_templates");
  }

  public static getInstance(): MongoConnection {
    if (!this.instance) {
      this.instance = new MongoConnection();
    }
    return this.instance;
  }

  public getDb(): Db {
    return this.db;
  }
}

export default MongoConnection;
