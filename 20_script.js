// get the element

var numberField = document.querySelector('#number');
var textMsgField = document.querySelector('#text-number');
numberField.addEventListener('keyup',strnumber);
function strnumber() {
    var str = numberField.value;
    var array = ['zero', 'one', 'two','three','four','five','six','seven','eight','nine'];
    var output = '';
    for(var i=0; i<str.length; i++)
    {
        output += array[str[i]] + ' ';
    }
    textMsgField.textContent = output;

}