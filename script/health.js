
const toggleButton = document.getElementById('mybtn');
const extraItems = document.querySelectorAll('.extra-item');

let isVisible = false;

toggleButton.addEventListener('click', () => {
    isVisible = !isVisible;
    
    // Toggle the visibility of extra items
    extraItems.forEach(item => {
        item.style.display = isVisible ? 'block' : 'none';
    });

    // Change button text based on visibility
    toggleButton.textContent = isVisible ? 'See Less' : 'See More';
});

const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const range = document.querySelector('.range-slider .range');
const rangeValues = document.getElementById('range-values');

function updateRange() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);

    // Ensure handles don't overlap
    if (min > max - 5) {
        rangeMin.value = max - 5;
    }

    if (max < min + 5) {
        rangeMax.value = min + 5;
    }

    const percentMin = (rangeMin.value / rangeMin.max) * 100;
    const percentMax = (rangeMax.value / rangeMax.max) * 100;

    range.style.left = percentMin + '%';
    range.style.width = (percentMax - percentMin) + '%';

    // Update the displayed range values
    rangeValues.textContent = `${rangeMin.value} - ${rangeMax.value}`;
}

rangeMin.addEventListener('input', updateRange);
rangeMax.addEventListener('input', updateRange);

updateRange();



