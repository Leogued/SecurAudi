$(document).ready(function() {
    // Initialise DataTables
    $('#vulnerabilities-table').DataTable({
        // Configurer les fonctionnalités supplémentaires si nécessaire
        // Par exemple, activer la recherche, la pagination, etc.
        "searching": true,
        "paging": true,
        // Autres options...
    });
});