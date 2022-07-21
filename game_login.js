function addUser(){
    var Player1Name = document.getElementById("player1NameImput").value;
    var Player2Name = document.getElementById("player2NameImput").value;
    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player2Name", Player2Name);
    window.location = "pagina/game_page.html";
}