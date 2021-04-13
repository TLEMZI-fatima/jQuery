$(document).ready(function(){
  var note=0;
  //QUESTION1
  $('#envoyer').click(function(){
      valid=true;
       
      //la coleur orange
         let result=$('input[name="bootstrap"]:checked') ;
      if(result.length==0)
        {    
       $("#qst1").css("color","orange");
          valid =false;
        }
      else{
      //la couleur des questions
      let r = $("input[name='bootstrap']:checked").val();
      if(r=="jQuery est une bibliothèque JavaScript"){
      $("#qst1").css( "color", "green");
      note++;
      
      valid=false;
      }else{
      $("#qst1").css("color","red");
      valid=false;
      }
      //la couleur des réponses
      $("#REP11").css("color","green");
      if(r=="jQuery est une bibliothèque Angular")
      {
        $("#REP12").css("color","red");
      }else if(r=="jQuery est une bibliothèque JSON")
      $("#REP13").css("color","red");
      }
     return valid;
    
   
     
  });
  // QUESTION2
  $('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
      let result=$('input[name="jquery"]:checked') ;
    if(result.length==0)
      {    
     $("#qst2").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='jquery']:checked").val();
    if(r=="hide()"){
    $("#qst2").css( "color", "green");
    note++;
   
    valid=false;
    }else{
    $("#qst2").css("color","red");
    valid=false;
    }
    //la couleur des réponses
    $("#REP21").css("color","green");
    if(r=="hidden()")
    {
      $("#REP22").css("color","red");
    }else if(r=="visible(false)")
    $("#REP23").css("color","red");
    }
   return valid;
   
  });
   //QUESTION3
  $('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
      let result=$('input[name="laravel"]:checked') ;
    if(result.length==0)
      {    
     $("#qst3").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='laravel']:checked").val();
    if(r=="jQuery() et $()"){
    $("#qst3").css( "color", "green");
    note++;
  
    valid=false;
    }else{
    $("#qst3").css("color","red");
    valid=false;
    }
    //la couleur des réponses
    $("#REP31").css("color","green");
    if(r=="script()")
    {
      $("#REP32").css("color","red");
    }else if(r=="jQuery")
    $("#REP33").css("color","red");
    }
   return valid;
   
  });
  //QUESTION4
  
  $('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
      let result=$('input[name="react"]:checked') ;
    if(result.length==0)
      {    
     $("#qst4").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='react']:checked").val();
    if(r=="Tout les réponses sont vrais"){
    $("#qst4").css( "color", "green");
    note++;
    
    valid=false;
    }else{
    $("#qst4").css("color","red");
    valid=false;
    }
    //la couleur des réponses
    $("#REP43").css("color","green");
    if(r=="Collection utile de méthodes pour manipuler les éléments sélectionnés")
    {
      $("#REP42").css("color","red");
    }else if(r=="Syntaxe pour référencer les éléments du document")
    $("#REP41").css("color","red");
    }
   return valid;
   
  });
  
  //QUESTION5
  
  $('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
      let result=$('input[name="qcm"]:checked') ;
    if(result.length==0)
      {    
     $("#qst5").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("input[name='qcm']:checked").val();
    if(r=="oui"){
    $("#qst5").css( "color", "green");
    note++;
  
    valid=false;
    }else{
    $("#qst5").css("color","red");
    valid=false;
    }
    //la couleur des réponses
    $("#REP51").css("color","green");
    if(r=="non")
    {
      $("#REP52").css("color","red");
    }else if(r=="oui/non")
    $("#REP53").css("color","red");
    }
    $("#qst6").html("votre note est: "+note+"/5");
    
   return valid;
   
  });
  
  
  });