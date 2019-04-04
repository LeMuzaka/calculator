$(document).ready(function(){
    $("#calculate").on("click", function(e){

        var num1 = $("#firstnum").val();
        var num2 = $("#secondnum").val();
        var opts = $("#options").val();

        if(!num1 || !num2){
            e.preventDefault();
        }

        switch(opts)
        {
            case '+':

                $("#operation").val(num1 + opts + num2);
                var add = Number(num1) + Number(num2);
                //converting string to number for num1 and num2
                $("#result").val(add);
                break;

            case '-':

                $("#operation").val(num1 + opts + num2);
                var minus = Number(num1) - Number(num2);
                $("#result").val(minus);
                break;

            case '*':

                $("#operation").val(num1 + opts + num2);
                var mul = Number(num1) * Number(num2);
                $("#result").val(mul);
                break;


            case '/':

                $("#operation").val(num1 + opts + num2);
                var divide = Number(num1) / Number(num2);
                $("#result").val(divide);
                break;

            default:
                break;
        }

    });

    $("#backid").on("click",function(e){

        $("#firstnum").val("");
        $("#secondnum").val("");
    });


});
