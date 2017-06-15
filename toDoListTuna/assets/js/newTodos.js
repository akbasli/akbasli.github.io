//listeden seçilenleri işaretle
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//çöp kovası ikonuna tıklayıp listeden eleman sil
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

//eklediğimiz todo aşağıda belirsin(
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class = 'fa fa-trash-o'></i></span> "+ todoText + "</li>");
	}
});

$(".fa-plus-square").click(function(){
	$("input[type = 'text']").fadeToggle();
})