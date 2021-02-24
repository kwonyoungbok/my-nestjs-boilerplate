import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  uri: process.env.MONGO_URI,
  useUnifiedTopology: process.env.MONGO_USE_UNIFIED_TOPOLOGY,
  useNewUrlParser: process.env.MONGO_USE_NEW_URL_PARSER,
}));
