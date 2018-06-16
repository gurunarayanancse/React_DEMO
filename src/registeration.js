import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('your-app')
);