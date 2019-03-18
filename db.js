import mongoose from "mongoose";
import dotenv from "dotenv";

// .env 파일에 있는 정보를 불러옴 정보는 process.env.key_name에 저장됨
dotenv.config();

// mongoDB와 연결
mongoose.connect(
  // 이렇게 함으로써 key값을 숨길 수 있음. 기껏 수납시킨 정보를 물거품이 되지 않도록 gitignore파일에 .env파일을 추가해야하는 것을 잊지 말것.
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = () => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);