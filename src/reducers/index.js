import { combineReducers } from 'redux';
import mediaPlayer from './mediaPlayer';
import config from './config';
import youtube from './youtube';
import website from './website';
import extension from './extension';

export default combineReducers({
	mediaPlayer,
	config,
	youtube,
	website,
	extension,
});

