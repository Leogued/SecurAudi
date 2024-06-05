document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btnAnalyser').addEventListener('click', afficherPanel);
});

function afficherPanel() {
    var panel = document.getElementById('panelForm');
    panel.innerHTML = `
        <form id="formAnalyse" class="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <div class="mb-4 flex items-center">
                <label for="ipStart" class="w-1/3 text-gray-700 text-sm font-bold">Plage d'adresse IP:</label>
                <input type="text" id="ipStart" name="ipStart" pattern="\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
                <span class="mx-2">à</span>
                <input type="text" id="ipEnd" name="ipEnd" pattern="\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4 flex items-center">
                <label for="mask" class="w-1/3 text-gray-700 text-sm font-bold">Mask réseau:</label>
                <input type="text" id="mask" name="mask" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran1">
            </div>
            <div class="mb-4 flex items-center haut">
                <label for="gateway" class="w-1/3 text-gray-700 text-sm font-bold">Passerelle:</label>
                <input type="text" id="gateway" name="gateway" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran2">
            </div>
            <div class="mb-4 flex items-center">
                <label for="portCount" class="w-1/3 text-gray-700 text-sm font-bold">Nombre de ports connus ouverts:</label>
                <input type="number" id="portCount" name="portCount" value="1" min="1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight gran3 focus:outline-none focus:shadow-outline" onchange="updatePortFields()">
            </div>
            <div id="portFields" class="mb-4 flex flex-col">
                <div class="flex items-center mb-2">
                    <label class="w-1/3 text-gray-700 text-sm font-bold">Numeros du Port ouvert:</label>
                    <input type="text" name="portOpen1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran5">
                </div>
            </div>
            <div class="mb-4 flex items-center">
                <label for="protocole" class="w-1/3 text-gray-700 text-sm font-bold">Protocole du Réseau:</label>
                <input type="text" id="protocole" name="protocole" placeholder="TCP" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran5">
            </div>
            <div class="flex items-center justify-between">
                <button type="button" onclick="modifierInformation()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Modifier les informations</button>
                <button type="button" onclick="confirmerInformation()" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Confirmer</button>
            </div>
        </form>`;
    panel.style.display = 'block';
}

function updatePortFields() {
    const portCount = document.getElementById('portCount').value;
    const portFields = document.getElementById('portFields');
    portFields.innerHTML = '';

    for (let i = 1; i <= portCount; i++) {
        const portField = document.createElement('div');
        portField.className = 'flex items-center mb-2';
        portField.innerHTML = `
            <label class="w-1/3 text-gray-700 text-sm font-bold">Numeros du Port ouvert:</label>
            <input type="text" name="portOpen${i}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran4">
        `;
        portFields.appendChild(portField);
    }
}

function modifierInformation() {
    // Logique pour modifier les informations
    alert('Modifier les informations');
}

function afficherChargement() {
    // Cache le contenu principal
    document.getElementById('panelForm').style.display = 'none';
    document.getElementById('btnAnalyser').style.display = 'none';

    // Affiche l'overlay de chargement
    document.getElementById('loadingOverlay').style.display = 'flex';

    // Affiche le premier message de progression
    document.getElementById('loadingMessage').textContent = "Analyse des informations en cours...";
}

function cacherChargement() {
    // Cache l'overlay de chargement
    document.getElementById('loadingOverlay').style.display = 'none';

    // Affiche à nouveau le contenu principal (si nécessaire)
    document.getElementById('panelForm').style.display = 'block';
    document.getElementById('btnAnalyser').style.display = 'block';
}

function confirmerInformation() {
    // Affiche l'écran de chargement
    afficherChargement();

    // Messages de progression

const messages = [
    "Collecte des informations sur les hôtes du réseau...",
    "Recherche des vulnérabilités connues...",
    "Analyse des ports ouverts...",
    "Exploration des services réseau...",
    "Identification des systèmes d'exploitation...",
    "Évaluation des risques potentiels...",
    "Détection d'anomalies de trafic...",
    "Analyse des journaux de connexion...",
    "Examen des politiques de sécurité...",
    "Identification des failles de sécurité...",
    "Génération de rapports d'analyse...",
];

    let index = 0;

    // Fonction pour afficher les messages de progression
    function afficherProgression() {
        document.getElementById('loadingMessage').textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    // Affiche les messages de progression à intervalles réguliers
    const intervalId = setInterval(afficherProgression, 6000);

      // Simule un délai pour l'analyse (vous pouvez remplacer par votre logique d'analyse)
      setTimeout(() => {
        // Logique après l'analyse
        // Simule la fin du traitement
        alert('Informations confirmées');
        cacherChargement();
        clearInterval(intervalId); // Arrête l'affichage des messages de progression
    }, 60000); // Simule une attente de 3 secondes
}
