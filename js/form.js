/*jshint esversion: 6 */
function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let form = document.querySelector(".main-form"),
        input = form.querySelector("input"),
        contactForm = document.getElementById("form"),
        inp = contactForm.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

        
        statusMessage.classList.add("status");
    
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9+]/ig, "");
    });
    inp[1].addEventListener("input", () => {
        inp[1].value = inp[1].value.replace(/[^0-9+]/ig, "");
    });

    function sendForm(form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let formData = new FormData(form);
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    function clearInp() {
		statusMessage.textContent = "";
	}
	input.oninput = clearInp;
    inp[0].oninput = clearInp;
    inp[1].oninput = clearInp;
    sendForm(form);
    sendForm(contactForm);
}
module.exports = form;