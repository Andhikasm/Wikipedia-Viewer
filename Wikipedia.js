$(document).ready(function(){
    
    $('#searchButton').click(function(){
        var searchField = $('#searchField').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchField + "&format=json&callback=?";
        $.ajax({
            type: "GET",
            url: url,
            sync: false,
            dataType: "json",
            success: function(data){
                $('#output').html("");
                for(var i = 0; i < data[1].length; i++){
                    $('#output').prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
            },
            error: function(errorMessage){
                alert("Error occured in the API");
            }
        });
    });
    
    $('#searchField').keypress(function(e){
        if(e.which == 13){
            $('#searchButton').click();
        }
    });
    
});
/* By Andhika Srimadeva */