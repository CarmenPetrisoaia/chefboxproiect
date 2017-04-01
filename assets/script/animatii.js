(function (app) {
    app(window.jQuery, window, document);
}(function ($, window, document) {
    /** define functions **/
    function valideazaCamp(element, grup, erori, mesajEroare, lungime, regex) {
        var validare = true;
        if (undefined != regex) {
            var exp = new RegExp(regex);
            validare = exp.test(element);
        }
        if (true === validare && undefined != lungime) {
            validare = (element.length > 3);
        }

        if (false === validare) {
            grup.addClass('form-group has-error');
            erori.push(mesajEroare);
        } else {
            grup.addClass('form-group has-success');
            grup.removeClass('has-error');
        }
    }

    $(function () {
        // DOM is ready
        //       alert('contact');
        // $(selector).actiune(function(){ ..... });

        $('#formularContact button[type="submit"]').click(function () {
            // valideazaFormular();
            var form = $('#formularContact');
            var erori = [];
            var nume = $('#nume').val();
            var grupNume = $('#grupNume');
            var lungimeMinimaNume = 3;
            var regexNume = '^[a-zA-Z ]+$';
            var mesajEroareNume = 'Numele introdus este invalid';
            valideazaCamp(nume, grupNume, erori, mesajEroareNume, lungimeMinimaNume, regexNume );

            var email = $('#email').val();
            var grupEmail = $('#grupEmail');
            var regexEmail = '\s+@\s+\.\s+';
            var mesajEroareEmail = 'Emailul introdus este invalid';
            valideazaCamp(email, grupEmail, erori, mesajEroareEmail, undefined, regexEmail);

            var mesaj = $('#mesaj').val();
            var grupMesaj = $('#grupMesaj');
            var lungimeMinimaMesaj = 5;
            var mesajEroareMesaj = 'Mesajul introdus este invalid';
            valideazaCamp(mesaj, grupMesaj, erori, mesajEroareMesaj, lungimeMinimaMesaj);


            $('#formularContact #messages').html("");
            var errorOutput = '';
            if (erori.length > 0) {
                errorOutput += '<p class="bg-danger">';
                for (var i = 0; i < erori.length; i++) {
                    errorOutput += erori[i] + '<br />';
                }
                errorOutput += '</p>';
            }
            $('#formularContact #messages').html(errorOutput);



            // Nume: "A-Z " min: 3 
            // Email: 
            // Mesaj: min: 15

            return false;
            //$('#grupNume').addClass('eroare');
            if (erori.length > 0) {
                return false;
            } else {
                return true;
            }
        });
    });
}));


function myMap() {
    var myCenter = new google.maps.LatLng(44.449805,26.083000);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 16};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}

var azi = new Date();
var ziua=azi.getDate();
var luna=azi.getMonth()+1;
var anul=azi.getFullYear();

azi= ziua+"/"+luna+"/"+anul;
document.getElementById("demo").innerHTML = azi;