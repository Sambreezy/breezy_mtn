/*Script*/

/*Form Validation*/
function validateForm() {
    input = document.getElementById("number").value;

    var phoneNumber = /^(\+?234703|0703|\+?234706|0706|\+?234803|0803|\+?234806|0806|\+?234810|0810|\+?234813|0813|\+?234814|0814|\+?234816|0816|\+?234903|0903|\+?234906|0906)[0-9]{7}$/;

    if (input.match(phoneNumber)) {
        alert ("Valid MTN Number!");
        return true;
    } else {
        alert ("Not a valid MTN Number!");
        return false;
    }
}