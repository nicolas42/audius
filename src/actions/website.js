export const toggleSearch = state => ({
	type: 'TOGGLE_SEARCH',
	state,
});

export const toggleJump = state => ({
	type: 'TOGGLE_JUMP',
	state,
});

export const setMainRightTab = (id = 'about') => ({
	type: 'SET_MAINRIGHT_TAB',
	id,
});

export const showChat = () => ({
	type: 'SHOW_CHAT',
});

export const showSettings = () => ({
	type: 'SHOW_SETTINGS',
});

export const toggleImport = state => ({
	type: 'TOGGLE_IMPORT',
	state,
});

export const toggleExport = state => ({
	type: 'TOGGLE_EXPORT',
	state,
});

export const togglePlayLists = state => ({
	type: 'TOGGLE_PLAYLISTS',
	state,
});
