export const smoothStart = () => {
    const themeIcon = document.querySelector("#themeIcon");
    const catoLogo = document.querySelector("#catoLogo");
    const incubatorLogo = document.querySelector("#incubatorLogo");

    if(localStorage.getItem('colorTheme') === 'dark'){
        document.documentElement.classList.add('dark');
        document.querySelector('body').style.backgroundColor = '#334155';
        themeIcon.src="src/assets/img/icons/dark.png";
        themeIcon.style.filter = 'invert(1)';
        catoLogo.src="src/assets/img/projects/cato_dark.png";
        incubatorLogo.src="src/assets/img/projects/incubator_dark.png";
    }

    setTimeout(() => {
        document.body.style.transition = "background-color 0.3s";
        const elements = document.querySelectorAll('.elementsHide');
        for(let i = 0; i < elements.length; i++){
            elements[i].classList.add('visible');
        }
        if(localStorage.getItem('colorTheme') === 'dark'){
            document.body.style.background = "#1e293b";
        } else {
            document.body.style.background = "#fafafa";
        }
    },4500);
    
    setTimeout(() => {document.body.style.transition = "initial";},5000);
}