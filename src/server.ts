import app from './index'
import dotenv from 'dotenv';

dotenv.config()

app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server on port ${process.env.PORT}`)
  });