import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRoute } from './routes/blog';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
const App = new Hono();
App.use("*", cors());
App.route('/api/v1', userRouter);
App.get('/', (c) => c.text('Please test me!'));
App.route('/api/v1/blog', blogRoute);
serve(App)({
    port: 3000,
    fetch: App.fetch
});
export default App;
