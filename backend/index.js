import {app} from './app.js'

app.listen(process.env.PORT,()=>{
  console.log(`Server start at http://localhost:${process.env.PORT}`);
})


