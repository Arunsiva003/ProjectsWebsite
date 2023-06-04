// You can use JavaScript to add interactivity to your webpage,
// such as displaying additional details when a user clicks on a project.

// This code assumes you have already created a "details" section for each project,
// and toggles its visibility when a user clicks on the "View Details" link.

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
	const link = project.querySelector('a');
	const details = project.querySelector('.details');
	
	link.addEventListener('click', e => {
		e.preventDefault();
		details.classList.toggle('visible');
	});
});
