$("#message-input").keydown(function(event) {
  if(event.keyCode == 10 || event.keyCode == 13) {
    $(this).val("OMG");
  }
});
