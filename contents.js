
function sendfriendrequest(friendid){
      	var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]).toString();
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.open("POST","https://www.facebook.com/ajax/add_friend/action.php?dpr=1",true)
			var fb_dtsg =$("#token").val()
			xmlhttp.setRequestHeader ("Content-Type", "application/x-www-form-urlencoded");
			xmlhttp.withCredentials=true;
			//var fb_dtsg = $("#token").val();
			xmlhttp.send(`to_friend=`+friendid+`&action=add_friend&how_found=hovercard&ref_param=hc_unknown&link_data[gt][engagement][eng_type]=1&link_data[gt][engagement][eng_src]=15&link_data[gt][engagement][eng_tid]=&outgoing_id=&logging_location=&no_flyout_on_click=true&ego_log_data&http_referer&floc&__user=`+user_id+`&__a=1&fb_dtsg=`+fb_dtsg);
			      $("#info").html('Add Success : <font color="red"><a href="https://www.facebook.com/'+friendid+'">Link</a></font>');
			     
			     console.log("add :" + fb_dtsg );

			      }
function loadusers(){
	console.log("loading");
	const regex = /\id=(.*?)\&/g;
      	$( ".fsl.fwb.fcb a" ).each(function( index ) {
      


      	var str = $(this).attr('data-hovercard');
		var m;
		var count =0;
        while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
		    if (m.index === regex.lastIndex) {
		        regex.lastIndex++;
		    }
    	
    // The result can be accessed through the `m`-variable.
	    
	    $("#id_to_add").append(`<option value="`+m[1]+`">`+m[1]+`</option>`);
	    
	    
}
		

      

      });
}
  $( document ).ready(function() {

  		console.log("searching");
		  		try {
		const fb = document.getElementsByName('fb_dtsg')[0].value;
  	 	window.prompt("Please Copy this to your clipoboad so that you have the right to add friends",fb);
   		console.log("found in ");
   		
  		$("#count_text").click()
  	
		   throw "monException"; 
		}
		catch (e) {
		   
		   console.log(e); 
		                  
		}
  	 		
		

   		//var c = window.prompt("Please give the number of how many friends you want to add Min 5 max 300");
      var c =1;
      if (isNaN(c)){

      	alert("please insert only number");
      	location.reload();
      }else{
      	$("._19sz").html('<div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span class="_2yav"><font color="blue">Patched Friends Adder</font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span class="_2yav"><font color="blue"><select id="id_to_add"> </select></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span class="_2yav"><font color="blue"><input type="button" name="add" value="add all" id="add_ids" class="nothing"></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span class="info"><font color="blue"><p id="info">State:  Bot is ready!.</p></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span class="info"><font color="blue"><p id="infoload">Loaded: .</p></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span><font color="blue"><input type="button" id="loadmore" value="load more"></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div><div class="_2yaa _2yap _2l5d" data-key="members"><a class="_2yau"  aria-current="page"><span><font color="blue"><input type="text" id="token" placeholder="Paste Token Here"></font></span><span class="img _55ym _55yn _55yo _2wwb" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Chargement..."></span></a></div>');
      	
      	loadusers();


      	$("#infoload").text("Loaded: "+$("#id_to_add option").length+".");
      	$("#add_ids").click(function zied() {
      		alert("Friends will be add now");
      		var c = 0;
      		var i=1;
      		 $("#id_to_add > option").each(function (){

      		 	var self=$(this).val();
      		 	setTimeout(function() {
				      
				       c++;
      		 	sendfriendrequest(self);

      		 	$("#infoload").text("Loaded: "+$("#id_to_add option").length+" Sent: "+ c);
      		 	


				    }, 2000*i);
				    i++;

      		 	
      		 

      		 	   		 });
      		

      		

      	});

      	$("#loadmore").click(function zi(){
      			console.log("clicked");
      			$('a').each(function (){

      				if ($(this).text()==="See More"){

      					$(this)[0].click();
      					console.log($(this).attr('href'));

      				}


      			});
      			
      			$("#id_to_add").find("option").remove();
      			loadusers();
      			$("#infoload").text("Loaded: "+$("#id_to_add option").length+".");
      		})
      }
      
      
});
