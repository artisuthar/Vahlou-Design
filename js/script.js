function validate()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    
    if(name=="")
    {
        document.getElementById("nameerror").innerHTML="*Please enter name";
        return false;
    }
    if(name.length<3)
    {
        document.getElementById("nameerror").innerHTML="*Please enter name must be greater than 3 character";
        return false;
    }
    if(name>8)
    {
        document.getElementById("nameerror").innerHTML="*Please enter name must be less than 8";
        return false;
    }
    var pattern=/^[a-zA-Z]+$/;
    if(!name.match(pattern))
    {
        document.getElementById("nameerror").innerHTML="*Please enter only character";
        return false;
    }
    
/*email validation*/

    if(email.indexOf('@')<0)
    {
        document.getElementById("emailerror").innerHTML="* Invalid email ID";
        return false;
    }
   if((email.charAt(email.length-4)!='.')&&(email.chaAt(email.length-3)!='.'))
   {
    document.getElementById("emailerror").innerHTML="* Invalid email ID";
        return false;
   }
/*phone validation*/

   if(phone==' ')
   {
    document.getElementById("phoneerror").innerHTML="*Enter valid phone number";
    return false;
   }
   var phonePattern=/^[0-9]{10}$/;
   if(phonePattern.test(phone))
   {
    return true;
   }
   else 
   {
    document.getElementById("phoneerror").innerHTML="*Please enter phone number";
    return false;
   }
}

/*model form validation ended */

/*contact form validation start 

    function contactValidate()
    {
        var contactname=document.getElementById(contactname).value;
        var contactemail=document.getElementById(contactemail).value;
        var contactphone=document.getElementById(contactphone).value;
        var contactaddress=document.getElementById(contactaddress).value;
        var textmsg=document.getElementById(textmsg).value;

        if(contactname=="")
        {
            document.getElementById("cnameerror").innerHTML="*Please enter name";
            return false;
        }
        if(contactname.length<3)
        {
            document.getElementById("cnameerror").innerHTML="*Please enter name must be greater than 3 character";
            return false;
        }
        if(contactname>8)
        {
            document.getElementById("cnameerror").innerHTML="*Please enter name must be less than 8";
            return false;
        }
        var pattern=/^[a-zA-Z]+$/;
        if(!contactname.match(pattern))
        {
            document.getElementById("cnameerror").innerHTML="*Please enter only character";
            return false;
        }
        
    /*email validation
    
        if(contactemail.indexOf('@')<0)
        {
            document.getElementById("cemailerror").innerHTML="* Invalid email ID";
            return false;
        }
       if((contactemail.charAt(contactemail.length-4)!='.')&&(contactemail.chaAt(email.length-3)!='.'))
       {
        document.getElementById("cemailerror").innerHTML="* Invalid email ID";
            return false;
       }
    /*phone validation
    
       if(contactphone==' ')
       {
        document.getElementById("cphoneerror").innerHTML="*Enter valid phone number";
        return false;
       }
       var phonePattern1=/^[0-9]{10}$/;
       if(phonePattern1.test(phone))
       {
        return true;
       }
       else 
       {
        document.getElementById("cphoneerror").innerHTML="*Please enter phone number";
        return false;
       }
    
       if(contactaddress==' ')
       {
        document.getElementById("caddresserror").innerHTML="*Please enter address";
        return false;
       }
       if(textmsg==' ')
       {
        document.getElementById("ctextmsgerror").innerHTML="*Please enter something";
        return false;
       }
       
    }
/*contact form validation ended */

