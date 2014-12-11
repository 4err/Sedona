(function () {
    //Блок обработки счетчиков
    var check_val = function (val, type) {
        if (isNaN(parseInt(val, 10))) {
            return 0;
        } else {
            var value = parseInt(val, 10);

            if ((value >= 0) && (type == "plus")) {
                return value + 1;
            }
            if ((value > 0) && (type == "minus")) {
                return value - 1;
            }
            return 0;
        }
    }

    var onClick = function clickHandler(event) {

        event.preventDefault();

        var input_val = this.querySelector("input").value;

        if (event.target.className == "counter-action minus") {

            this.querySelector("input").value = check_val(input_val, "plus");

        } else if (event.target.className == "counter-action plus") {

            this.querySelector("input").value = check_val(input_val, "minus");

        }

    };

    var counters = document.querySelectorAll(".counter");

    for (var i = 0; i < counters.length; i++) {
        var counter = counters[i];
        counter.addEventListener('click', onClick);
    }


    //Работа с загруженными картинками.

    var delete_foto = function clickHandler(event) {

        event.preventDefault();

        this.parentNode.style.display = "none";
    };

    var photos = document.querySelectorAll(".delete-photo");

    for (var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        photo.addEventListener('click', delete_foto);
    }

    var form = document.querySelector(".response");
    var files = "";

    form.querySelector(".pictures").addEventListener("change", function () {
        files = this.files;

        previewImages(files);
    });

    function previewImages(files) {

        for (var i = 0; i < files.length; i++) {

            var file = files[i];

            if (file.type.match(/image.*/)) {

                var reader = new FileReader();

                reader.onload = function (event) {

                    console.log(event.target.result);

                };

                reader.readAsDataURL(file);

            }

        }

    }


})();