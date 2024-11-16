//  Event Listeners

document.getElementById('nav-dropdown').addEventListener('change', function () {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});

document.getElementById('togglePlanetImageButton')?.addEventListener('click', togglePlanetImage);

console.log("javascript working!");

//  Global Variables

let planetImageShowing = false;

function togglePlanetImage() {
    if (!planetImageShowing) {
        document.querySelector('.planetImage').style.display = 'block';
        document.getElementById('togglePlanetImageButton').innerHTML = "Hide Planet";
        planetImageShowing = true;
    } else {
        document.querySelector('.planetImage').style.display = 'none';
        document.getElementById('togglePlanetImageButton').innerHTML = "Show Planet";
        planetImageShowing = false;
    }
}