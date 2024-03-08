function loadPortfolio(){
    document.getElementById("portfolioPerso").style.display = "none";
    document.getElementById("portfolioUniv").style.display = "flex";
}

function switchToBackendSkills(){
    let backendbtn = document.getElementById("skillBackendBtn");
    let frontendbtn = document.getElementById("skillFrontendBtn");
    let databasebtn = document.getElementById("skillDatabaseBtn");
    let otherbtn = document.getElementById("skillOtherBtn");

    document.getElementById("backend").style.display = "flex";
    document.getElementById("backend2").style.display = "flex";
    document.getElementById("frontend").style.display = "none";
    document.getElementById("database").style.display = "none";
    document.getElementById("skill-other").style.display = "none";

    backendbtn.style.border = "1px solid #1E282D"
    frontendbtn.style.border = "0px solid #1E282D"
    databasebtn.style.border = "0px solid #1E282D"
    otherbtn.style.border = "0px solid #1E282D"

    backendbtn.style.boxShadow = "0px 0px 20px #1E282D"
    frontendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    databasebtn.style.boxShadow = "0px 0px 0px #1E282D"
    otherbtn.style.boxShadow = "0px 0px 0px #1E282D"
}

function switchToFrontendSkills(){
    let backendbtn = document.getElementById("skillBackendBtn");
    let frontendbtn = document.getElementById("skillFrontendBtn");
    let databasebtn = document.getElementById("skillDatabaseBtn");
    let otherbtn = document.getElementById("skillOtherBtn");

    document.getElementById("backend").style.display = "none";
    document.getElementById("backend2").style.display = "none";
    document.getElementById("frontend").style.display = "flex";
    document.getElementById("database").style.display = "none";
    document.getElementById("skill-other").style.display = "none";

    backendbtn.style.border = "0px solid #1E282D"
    frontendbtn.style.border = "1px solid #1E282D"
    databasebtn.style.border = "0px solid #1E282D"
    otherbtn.style.border = "0px solid #1E282D"

    backendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    frontendbtn.style.boxShadow = "0px 0px 20px #1E282D"
    databasebtn.style.boxShadow = "0px 0px 0px #1E282D"
    otherbtn.style.boxShadow = "0px 0px 0px #1E282D"
}

function switchToDatabaseSkills(){
    let backendbtn = document.getElementById("skillBackendBtn");
    let frontendbtn = document.getElementById("skillFrontendBtn");
    let databasebtn = document.getElementById("skillDatabaseBtn");
    let otherbtn = document.getElementById("skillOtherBtn");

    document.getElementById("backend").style.display = "none";
    document.getElementById("backend2").style.display = "none";
    document.getElementById("frontend").style.display = "none";
    document.getElementById("database").style.display = "flex";
    document.getElementById("skill-other").style.display = "none";

    backendbtn.style.border = "0px solid #1E282D"
    frontendbtn.style.border = "0px solid #1E282D"
    databasebtn.style.border = "1px solid #1E282D"
    otherbtn.style.border = "0px solid #1E282D"

    backendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    frontendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    databasebtn.style.boxShadow = "0px 0px 20px #1E282D"
    otherbtn.style.boxShadow = "0px 0px 0px #1E282D"
}

function switchToOtherSkills(){
    let backendbtn = document.getElementById("skillBackendBtn");
    let frontendbtn = document.getElementById("skillFrontendBtn");
    let databasebtn = document.getElementById("skillDatabaseBtn");
    let otherbtn = document.getElementById("skillOtherBtn");

    document.getElementById("backend").style.display = "none";
    document.getElementById("backend2").style.display = "none";
    document.getElementById("frontend").style.display = "none";
    document.getElementById("database").style.display = "none";
    document.getElementById("skill-other").style.display = "flex";

    backendbtn.style.border = "0px solid #1E282D"
    frontendbtn.style.border = "0px solid #1E282D"
    databasebtn.style.border = "0px solid #1E282D"
    otherbtn.style.border = "1px solid #1E282D"

    backendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    frontendbtn.style.boxShadow = "0px 0px 0px #1E282D"
    databasebtn.style.boxShadow = "0px 0px 0px #1E282D"
    otherbtn.style.boxShadow = "0px 0px 20px #1E282D"
}

function switchPortfolioToPerso(){
    document.getElementById("portfolioPerso").style.display = "flex";
    document.getElementById("portfolioUniv").style.display = "none";

    let buttonPerso = document.getElementById("portfolio-sbtn2");
    let buttonUniv = document.getElementById("portfolio-sbtn1");

    buttonPerso.style.border = "1px solid #1E282D"
    buttonPerso.style.boxShadow = "0px 0px 20px #1E282D"

    buttonUniv.style.border = "0px solid #1E282D"
    buttonUniv.style.boxShadow = "0px 0px 0px #1E282D"
}

function switchPortfolioToUniv(){
    document.getElementById("portfolioPerso").style.display = "none";
    document.getElementById("portfolioUniv").style.display = "flex";

    let buttonPerso = document.getElementById("portfolio-sbtn2");
    let buttonUniv = document.getElementById("portfolio-sbtn1");

    buttonPerso.style.border = "0px solid #1E282D"
    buttonPerso.style.boxShadow = "0px 0px 0px #1E282D"

    buttonUniv.style.border = "1px solid #1E282D"
    buttonUniv.style.boxShadow = "0px 0px 20px #1E282D"
}

function toggleNavBurger(){
    event.preventDefault();
    let navmenu = document.getElementById("navmenu");
    let burger = document.getElementById("burger");

    burger.style.borderBottom = "3px solid #1E282D"
    if(window.getComputedStyle(navmenu).display === "none"){
        navmenu.style.display = "flex";
    }else{
        navmenu.style.display = "none";
    }
}