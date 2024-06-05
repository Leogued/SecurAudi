document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btnAnalyser').addEventListener('click', afficherPanel);
});

function afficherPanel() {
    var panel = document.getElementById('panelForm');
    panel.innerHTML = `
        <form id="formAnalyse" class="bg-white pad p-6 rounded shadow-md w-full max-w-lg ">
            <div class="mb-4 flex items-center">
                <label for="ipStart" class="w-1/3 text-gray-700 text-sm font-bold">Plage d'adresse IP:</label>
                <input type="text" id="ipStart" name="ipStart" pattern="\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran1">
                <span class="mx-2">à</span>
                <input type="text" id="ipEnd" name="ipEnd" pattern="\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran1">
            </div>
            <div class="mb-4 flex items-center">
                <label for="mask" class="w-1/3 text-gray-700 text-sm font-bold">Mask réseau:</label>
                <input type="text" id="mask" name="mask" placeholder="0.0.0.0" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran2">
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
                    <input type="text" name="portOpen1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gran4">
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
    // Appliquer l'effet de flou à tout le contenu en arrière-plan
    document.querySelector('.colonne-11').classList.add('blur');
}

function updatePortFields() {
    const portCount = document.getElementById('portCount').value;
    const portFields = document.getElementById('portFields');
    portFields.innerHTML = '';

    for (let i = 1; i <= portCount; i++) {
        const portField = document.createElement('div');
        portField.className = 'flex items-center mb-2';
        portField.innerHTML = `
            <label class="w-1/3 text-gray-700 text-sm font-bold">Port ouvert:</label>
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
    // Cacher le panneau de formulaire
    document.getElementById('panelForm').style.display = 'none';

    // Afficher l'overlay de fond et le panneau de chargement
    document.getElementById('backgroundOverlay').style.display = 'block';
    document.getElementById('loadingOverlay').style.display = 'flex';

    // Appliquer l'effet de flou au contenu en arrière-plan
    document.querySelector('.colonne-11').classList.add('blur');

    // Messages à afficher
    const messages = [
        "Analyse des informations en cours...",
        "Début du processus d'analyse...",
        "Démarrage des microservices...",
        // Ajoutez autant de messages que nécessaire
    ];

    let index = 0;

    function afficherProgression() {
        if (index < messages.length) {
            document.getElementById('loadingMessage').textContent = messages[index];
            index++;
        } else {
            clearInterval(intervalId);
            cacherChargement();
            alert("Analyse terminée");
        }
    }

    const intervalId = setInterval(afficherProgression, 6000);
}

function cacherChargement() {
    // Afficher à nouveau le panneau de formulaire
    document.getElementById('panelForm').style.display = 'block';

    // Cache l'overlay de fond et le panneau de chargement
    document.getElementById('backgroundOverlay').style.display = 'none';
    document.getElementById('loadingOverlay').style.display = 'none';

    // Retire l'effet de flou du contenu principal
    document.querySelector('.colonne-11').classList.remove('blur');
}



function confirmerInformation() {
    // Lance le processus de chargement
    afficherChargement();
}
