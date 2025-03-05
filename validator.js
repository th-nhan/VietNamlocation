

function validator(options) {

    var selectorRules = {};

    function validate(inputElement, rule){
        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)

        //lấy rule của selector
        var rules = selectorRules[rule.selector];
        //Nếu có lỗi thì dừng kiểm tra
        for(var i = 0 ;i<rules.length;++i)
        {
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid');
        }
        else{
            errorElement.innerText = " "
            inputElement.parentElement.classList.remove('invalid');

        }
        return !errorMessage;
    }


    var  formElement = document.querySelector(options.form);


    if(formElement)
    {
        //Khi submitform

        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            //Lặp qua từng rules và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            });

            if(isFormValid)
            {
                //Trg hop submit
                if(typeof options.onsubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])');
                    var formValue = Array.from(enableInputs).reduce(function(values,input){
                        return (values[input.name] = input.value) && values;
                    },{});
                    options.onsubmit(formValue)
                }else{   
                    formElement.submit();
                }
            }
        }



        options.rules.forEach(function(rule) {

            //Lưu lại các rule cho mỗi input
            
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector]=[rule.test];
            }


            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement)
            {
                //Xử lý TH blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement,rule)
                }

                //Xử lý TH khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = " "
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

validator.isRequired = function (selector,message) {
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined :message|| "Vui lòng điền vào!!"
        }
    }

}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value){
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return regex.test(value) ? undefined : "Email không hợp lệ"
        }
    }
}

validator.minLength = function (selector,min) {
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : 'Mật khẩu phải 4 kí tự trở lên'
        }
    }
}

validator.isConfirmed = function (selector,getConfrirmValue,message) {
    return {
        selector: selector,
        test: function(value){
            return value === getConfrirmValue() ? undefined : message || 'Giá trị không trùng khớp'
        }
    }
}

