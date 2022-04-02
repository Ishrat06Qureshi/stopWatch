const app = () => {
	const parentId = document.getElementById('parent-id');
	const childId = document.getElementById('child-id');
	console.log('parentId', parentId);
	console.log('childId', childId);
	const handleParent = () => {
		alert('I am in parent div');
	};
	const childParent = () => {
		alert('I am in parent div');
	};
	parentId.addEventListener('click', handleParent);
	childId.addEventListener('click', childParent);
};
app();
