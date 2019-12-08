$(document).ready(function(){
  $("#btnSubmit").click(function(){
  	var datas = $('textarea.input-field').serialize();	    
    $("#result").val("");    
	$.post("https://script.google.com/macros/s/AKfycbz1odTaKjm_9_CR5FKIhpW_XtJGDncU9RxFJhmeSLmDhmY58r4/exec",
	datas,
	function(data, status){
    	$("#result").val("Data: " + JSON.stringify(data,null,'\t') + "\nStatus: " + new Date() + JSON.stringify(status,null,'\t')); 
		//alert("Data: " + data + "\nStatus: " + status);
	});
  });
});
function myFunction() {
	document.cookie = "Thử tạo cookies...."+ new Date();
  	alert(document.cookie);
}
