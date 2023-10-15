const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member) => {
    member.addEventListener('click', () => {
        const details = member.querySelector('.details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
