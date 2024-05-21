var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8', 'Type 9', 'Type 10'],
        datasets: [{
            label: 'Number of Vulnerabilities',
            data: [50, 60, 70, 65, 80, 75, 90, 55, 72, 68], // Données de vulnérabilité
            backgroundColor: '#473fe185',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false // Désactiver l'affichage de la légende
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Number of Vulnerabilities'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Vulnerability Type'
                }
            }]
        }
    }
});
