$(document).ready(function() {

    $("#search-button").click(function() {
        if (document.getElementById("searchbox").value == "") {
            alert("[Chưa nhập cái gì sao search ><]");
        } else {
            $("#searching").show();
            setTimeout(function() { $("#searching").hide(); }, 3000);
        }
    });
});