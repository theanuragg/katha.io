import { Hono} from 'hono'
import { userRouter } from './routes/user'
import { blogRoute } from './routes/blog'
import {cors} from 'hono/cors'
import {Bindings, Variables} from "./types/EnvTypes"


const App = new Hono<{Bindings: Bindings; Variable: Variables}>();
App.use("*", cors())
App.route('/api/v1', userRouter)
App.get('/', (c) => c.text('Please test me!'))
App.route('/api/v1/blog',blogRoute )
 

export default App;
