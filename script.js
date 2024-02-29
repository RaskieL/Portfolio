function loadPortfolio(){
    document.getElementById("portfolioPerso").style.display = "none";
    document.getElementById("portfolioUniv").style.display = "flex";
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