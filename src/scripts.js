//! ---------------------- Funções Para AJAX --------------------------------
// $.ajax({
//     url: 'data.json',
//     dataType: 'json',
//     success: function(data) {
//       i = 0;
//       while(i < 15) {
//       	console.log('Quantidade: ' + data.phones[i].quantidade 
//       	+ '\n' +
//       	'Número: ' + data.phones[i].numero);
//       	i++;
//       }
//     },
//     statusCode: {
//         404: function() {
//             alert("some problem");
//         }
//     },
// });

//! --------------------------- Fim Funções AJAX -----------------------------


//! ----------------- scripts para view (Jquery) --------------------
$(document).ready(function(){
    $("#site_input").focus(function(){
        $(this).addClass("italic");
    });
    $("#site_input").blur(function(){
        $(this).removeClass("italic");
    });
});

$(document).ready(function(){
    $("#sort_numbers").click(function(){
        if($(this).hasClass('fa-sort-numeric-desc')) {
        	$(this).removeClass("fa-sort-numeric-desc");
        	$(this).addClass("fa-sort-numeric-asc");
        } else {
        	$(this).removeClass("fa-sort-numeric-asc");
        	$(this).addClass("fa-sort-numeric-desc");
        }
    });
});
//! -------------------- Fim Scripts Jquery -------------------