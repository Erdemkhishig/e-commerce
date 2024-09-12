import { connect } from "mongoose";

export const connectToDatabase = async () => {
    const conn = await connect(
        "mongodb+srv://erdmee1104:yP3rFwjSfeGtcbnd@ecommerce.ebci2.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Ecommerce"
    );

    console.log(`Connected to database ${conn.connection.host}`);
};

