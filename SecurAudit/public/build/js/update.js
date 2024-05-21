window.onload = function() {
    // Récupérer les éléments nécessaires
    var lastUpdatedElement = document.getElementById('lastUpdated');
    var updateButton = document.getElementById('updateButton');
    var analyzeButton = document.getElementById('analyzeButton');
    
    // Fonction pour mettre à jour la date et l'heure
    function updateLastUpdated() {
        // Récupérer la date et l'heure actuelles
        var currentDate = new Date();
        
        // Formater la date et l'heure
        var formattedDate = currentDate.toLocaleDateString();
        var formattedTime = currentDate.toLocaleTimeString();
        
        // Afficher la date et l'heure de la dernière mise à jour
        lastUpdatedElement.innerHTML = "Dernière mise à jour : " + formattedDate + " à " + formattedTime;
    }
    
    // Associer la fonction à l'événement click des boutons
    updateButton.addEventListener('click', updateLastUpdated);
    analyzeButton.addEventListener('click', updateLastUpdated);
}
