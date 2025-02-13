import mongoose from 'mongoose';

const dbInit = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: 'pokebash' });
    console.log(`DB connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbInit;
