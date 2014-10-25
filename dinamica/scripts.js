var addAssunto = function(nome) {
	var element = 
	"<div class='assunto assuntoAprender'>" + nome +
		"<input type='image' src='img/delete.png' id='delete'></input>" +
		"<input type='image' src='img/done.png' id='done'></input>" +
	"</div><div style='clear: both'></div>";
	$("#aprender").after(element);
}
$(document).ready(function(){
	var showAprender = true;
	var showAprendidas = true;
	$("#assunto").keyup(function(e){
		if(e.keyCode == 13) {
			if ($("#assunto").val() != '') {
				var nomeAssunto = $("#assunto").val();
				addAssunto(nomeAssunto);
				$("#assunto").val('');
			}
		}
	});
	$("#adicionar").click(function(){
		if ($("#assunto").val() != '') {
			var nomeAssunto = $("#assunto").val();
			addAssunto(nomeAssunto);
			$("#assunto").val('');
		}
	});
	$("#aprender").click(function(){
		if (showAprender) { 
			$(".assuntoAprender").fadeOut("fast");
		} else {
			$(".assuntoAprender").fadeIn("fast");
		}
		showAprender = !showAprender;
	});
	$("#aprendidos").click(function(){
		if (showAprendidas) { 
			$(".assuntoAprendido").fadeOut("fast");
		} else {
			$(".assuntoAprendido").fadeIn("fast");
		}
		showAprendidas = !showAprendidas;
	});
	$(document).on("click", "#delete", function(){
		$(this).parent().fadeOut("fast", function(){
			$(this).remove();
		});
	});
	$(document).on("click", "#done", function(){
		$("#aprendidos").after($(this).parent());
		$("#aprendidos").after("<div style='clear: both;'></div>");
		$(this).parent().removeClass("assuntoAprender");
		if (!showAprendidas) {
			$(this).parent().fadeOut("fast");
		}
		$(this).parent().addClass("assuntoAprendido");
		$(this).remove();
	});
	$(document).on("mouseenter", ".assunto", function(){
		$(this).css("background-color", "#b7daf7");
	});
	$(document).on("mouseleave", ".assunto", function(){
		$(this).css("background-color", "white");
	});
});