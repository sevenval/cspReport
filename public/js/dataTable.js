$(document).ready(function() {
    $('#csp').dataTable( {
        "ajax": {
            "url": "/csp",
            "dataSrc": ""
        },
        "columns": [
            { "data": "domain" },
            { "data": "document-uri" },
            { "data": "blocked-uri" },
            { "data": "violated-directive" },
            { "data": "original-policy"},
            { "data": "date" }
        ],
        "aLengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
    } );
} );