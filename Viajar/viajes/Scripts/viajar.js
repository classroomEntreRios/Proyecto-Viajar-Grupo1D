$(document).ready(function(){
    $("#ibotonAcceder").click(function(){
        $("#loginPanel").fadeToggle("fast");
    });
 
  $("#dashButton").hover(function(){
    $("#sideNav").show();
  })

  $("#dashButton").click(function(){},function(){
      $("#sideNav").fadeToggle();
  })

  $("#sideNav").hover(function(){},function(){
    $("#sideNav").hide();
  })

  $("#ibotonAcceder").hover(
    function(){
    $("#perfilOptions").fadeToggle();
  },
  function(){
    $("#perfilOptions").show();
  }  
  )
  $("#perfilOptions").hover(function(){
    $("#perfilOptions").show();
  },function(){
    $("#perfilOptions").fadeToggle();
  })

  });
