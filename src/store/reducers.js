// import * as homeReducer from '../features/home/reducer';
import * as loginReducer from '../features/login/reducer';
import * as weatherReducer from '../features/weather/reducer';

export default Object.assign({}, loginReducer, weatherReducer);
