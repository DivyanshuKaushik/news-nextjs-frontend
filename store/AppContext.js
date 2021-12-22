import React,{useState} from 'react'

export const AppContext = React.createContext();

export const ContextWrapper = (props) => {

	const [ store, setStore ] = useState({
		user:"",
        todo:""
	});

	const [ actions, setActions ] = useState({
        setUser: currentUser => setStore({...store,user:currentUser})
	});
	return (
		<AppContext.Provider value={{ store, actions }}>
			{props.children}
		</AppContext.Provider>
	);
}
