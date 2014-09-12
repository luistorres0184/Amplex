
$search = "";
$(document).ready(function(){
	$search = GetURLParameter('q');
  $.ajax({
    type: "GET",
    url: "products_catalog.xml",
    dataType: "xml",
    success: parseXML
	});

});
function parseXML(xml){
		var reg = new RegExp($search, "i");
		var results = "";
    $(xml).find('line').each(function(){
        var name = $(this).find('name').text();
        var nameSearch = name.search(reg);
        var category = $(this).find('category').text();
        var categorySearch = category.search(reg);
  
  			if(nameSearch > -1){
  				results += $(this).find('html').text();
        }
        else if(categorySearch > -1) {
    			results += $(this).find('html').text();
    		}
				$("#portfolio").html(results);			
    });    
}
function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
  }

