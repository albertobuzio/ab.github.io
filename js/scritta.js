var moodList=["&#9728;", "&#9729;", "&#9733;", "&#9752;", "&#9774;", "&#9787;", "&#9829;", "&#9833;", "&#9834;", "&#9835;", "&#9836;"];
var mood = moodList[Math.floor(Math.random() * moodList.length)];
var randomColor = Math.floor(Math.random()*16777215).toString(16);
var moodColored = "<span style=\"color: #"+randomColor+";\">"+mood+"</span>";
var inputMood = "<input type=\"text\" placeholder=\"How do you feel?\" name=\"andYou\"/>";

let myTypeItInstance = new TypeIt('#presentation', {
    lifeLike: true,
    loop: false,
    waitUntilVisible: true,
    startDelay: 1000,
    cursor: true,
    afterComplete: (instance) => {
        var input = document.getElementsByName('andYou')[0];
        var body = document.getElementsByTagName('body')[0];
        
        $(".ti-cursor").hide();
        $("input[name='andYou']").focus();
                
        var convertToHexCode = function(str) {
            var chars = str.split('');
            var code = 0;

            chars.forEach(function(char) {
                code += +char.charCodeAt(0) * 987654;
            });

            return code.toString(16).substr(0, 6);
        };

        input.onkeyup = function(e) {
            var code = convertToHexCode(e.target.value);

            if (code === '0') {
                body.style.backgroundColor = '#ffffff';
                return;
            }

            body.style.backgroundColor = '#' + code;
        };
    },
})
.type('Ciao! I\'m alberto buzio')
.break()
.pause(150)
.type('User Experience and Interaction Engineer')
.pause(500)
.delete(8)
.type('Designer')
.break()
.pause(150)
.type('Today I\'m feeling ')
.pause(150)
.type(moodColored)
.break()
.break()
.pause(1000)
.type('And YOU...')
.break()
.pause(150)
.type(inputMood);

myTypeItInstance.go();