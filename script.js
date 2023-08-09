
function mainTabsSelector (number) {
    var tabBorder = document.getElementById(`border${number}`);
    var tabContent = document.getElementById(`tab-content${number}`);
    for(i=0; i<5; i++) {
        var clearTabBorder = document.getElementById(`border${i+1}`);
        clearTabBorder.style.backgroundColor = "#f1f8f6"; 
        var clearTabContent = document.getElementById(`tab-content${i+1}`);
        clearTabContent.classList.add('inactive');
    }
    tabContent.classList.remove('inactive');
    tabBorder.style.backgroundColor = "#008248";
}


function footerExtended (number) {
    var footerTab = document.getElementById(`footer-extended${number}`);
    footerTab.classList.toggle('inactive');

    var footerArrowDown = document.getElementById(`footer-arrow-down${number}`);
    var footerArrowUp = document.getElementById(`footer-arrow-up${number}`);
    footerArrowDown.classList.toggle('inactive');
    footerArrowUp.classList.toggle('inactive');
}