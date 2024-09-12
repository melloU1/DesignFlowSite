document.querySelectorAll('.cube').forEach(cube => {
    cube.addEventListener('click', function() {
        const stepNumber = this.getAttribute('data-step');
        const content = document.getElementById('step' + stepNumber);
        if (!content.classList.contains('active')) {
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
            this.classList.add('active');
            const nextStepNumber = parseInt(stepNumber) + 1;
            const nextCube = document.querySelector(`.cube[data-step="${nextStepNumber}"]`);
            if (nextCube) {
                nextCube.style.display = 'block';
            }
        }
    });
});
