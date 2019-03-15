import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import Temps from './Temperatures';

export default [...ApiErrors, ...WeatherSagas, ...Temps];
