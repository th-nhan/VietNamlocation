

function validator(options) {

    function validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector('.form-message')

        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorElement.innerText = " "
            inputElement.parentElement.classList.remove('invalid');

        }

    }


    var  formElement = document.querySelector(options.form);


    if(formElement)
    {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement)
            {
                inputElement.onblur = function(){
                    validate(inputElement,rule)
                }
            }
        });
    }
}

validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : "Không hợp lệ"
        }
    }

}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : "Không hợp lệ"
        }
    }
}


