import React from 'react';

export default function Aspect(props) 
{
	const aspect = props.aspect;
	if (aspect === 'molecular_function') {
		return <MolecularFunction />;
	}
	if (aspect === 'cellular_component') {
		return <CellularComponent />;
	}
	if (aspect === 'biological_process') {
		return <BiologicalProcess />;
    }
	return <span></span>;
}

function MolecularFunction(props) {
	var styles = {
		color: '#FFFFFF',
		fontWeight: 'bold', 
		backgroundColor: '#00BFFF', 
		padding: '3px',
		textAlign:'center',
		width: '200px',
		display: 'inline-block'
	};
	return <span style={styles}>Molecular Function</span>;
}

function CellularComponent(props) {
	var styles = {			
		color: '#FFFFFF',
		fontWeight: 'bold',
		backgroundColor: '#F08080', 
		padding: '3px',
		textAlign:'center',
		width: '200px',
		display: 'inline-block'	
		};
	return <span style={styles}>Cellular Component</span>;
}

function BiologicalProcess(props) {
	var styles = {
		color: '#FFFFFF',
		fontWeight: 'bold',
		backgroundColor: '#3CB371', 
		padding: '3px',
		textAlign:'center',
		width: '200px',
		display: 'inline-block'				
	};
	return <span style={styles}>Biological Process</span>;
}