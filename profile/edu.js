function productAddToTable() {
    // Does tbody tag exist? add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    
    // Append product to table
    $("#productTable tbody").append(productBuildTableRow(_nextId));
    
    // Increment next ID to use
    _nextId += 1;
}
function productAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#productTable tbody").append("<tr>" +
        "<td>" + $("#productname").val() + "</td>" +
        "<td>" + $("#introdate").val() + "</td>" +
        "<td>" + $("#url").val() + "</td>" +
        "</tr>");
}
function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}
