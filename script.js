// Jan 20 - Feb 18: Aquarius; Feb 19 - Mar 20: Pisces; Mar 21 - Apr 19: Aries; Apr 20 - May 20: Taurus; May 21 - Jun 20: Gemini
// Jun 21 - Jul 22: Cancer; Jul 23 - Aug 22: Leo; Aug 23 - Sep 22: Virgo; Sep 23 - Oct 22: Libra; Oct 23 - Nov 21: Scorpio
// Nov 22 - Dec 21: Sagittarius; Dec 22 - Jan 19: Capricorn

var signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Zeus"];
var messages = ["You shall shortly grow a very impressive goatee. Stay away from olive oil and don’t stock up on sandwiches -- they may be going out of fashion soon!"
    , "Try swimming in the ocean. You may discover a new passion -- or finally reach your watery grave. Tell the sharks hi from me.",
    "Take a shower. You have been smelling fishy lately and it is driving away your friends.",
    "You have been feeling awfully powerful and restless lately, but keep your cool. We don’t need another war. In the meantime, you might try taking up computer science as a hobby -- you may feel at home with your fellow RAMS!\n",
    "Go bowling in the next few days. You shall have tremendous luck, so make sure to lay down a hefty bet. Use the profits to get in touch with your inner bull -- buy a nose-ring!\n",
    "You have recently become very close with your long-lost fraternal twin. Interview everyone you know about their deepest, darkest secrets, because your twin’s will mirror your own.",
    "Shortly you will witness your loved ones beginning to falter, but stay strong and stay grumpy. You are a gift to the world.",
    "Over the next few weeks your strength will start to wax. Be gentler with your friends and remember to clip your eyebrows and you can thrive in this reinvention of your previous, oh-so-dreary self.",
    "Consider a career in milk or parking tickets. Your purity may begin to take over the lives of those close to you when you connect with your core so closely, but do not fret: it is for the greater good. Trust me. Please.",
    "The good news: You shall shortly be blossoming into quite the impressive gymnast. To keep your future intact, please take up gymnastics. The bad news: a year into your triumphant new career, you shall make the front page of the newspaper with your fatal fall from the shoulders of your closest friend the parrot Sally and you shall become the first saint of Parrots. So it’s not all bad.",
    "You may have noticed your eyes beginning to creep backwards into your head. This won’t be a permanent difference -- you can fix it by taking a vow of silence and eating radishes for breakfast every morning for the next six days. Take care to avoid potholes.",
    "If you take the time to check your horoscopes over the next few days, you may notice they give polar opposite predictions. This is not a mistake -- you are slowly being pulled into the black hole which has found a home in your toilet.",
    "I dunno, have fun with your thunderbolts. Horoscopes don't cover your fantastic birthday."];
var images = ["img/Capricorn.png","img/Aquarius.png","img/Pisces.png","img/Aries.png","img/Taurus.png","img/Gemini.png","img/Cancer.png","img/Leo.png","img/Virgo.png","img/Libra.png","img/Scorpio.png","img/Sagittarius.png","img/Zeus.jpg"];

function onSubmit() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var birthday = getBirthday(month, day);
    var name = document.getElementById("userName").value;

    var greeting = nameExists(name);

    var sign = finder(month, day, signs);
    var message = greeting + birthday + finder(month, day, messages);
    var image = finder(month, day, images);

    document.getElementById("sign").innerHTML = sign;
    document.getElementById("message").innerHTML = message;
    document.getElementById("image").src = image;
}

function isGoodDate(month, day) {
    var max = 30;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        max = 31;
    }
    if (month == 2) {
        max = 29;
    }
    return (day <= max);
}

function finder(month, day, array) {
    var item = "";

    if (month == 12 && day >= 22 || month == 1 && day <= 19) {
        item = array[0];
    }
    if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        item = array[1];
    }
    if (month == 2 && day >= 20 || month == 3 && day <= 18) {
        item = array[2];
    }
    if (month == 3 && day >= 20 || month == 4 && day <= 18) {
        item = array[3];
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 18) {
        item = array[4];
    }
    if (month == 5 && day >= 20 || month == 6 && day <= 18) {
        item = array[5];
    }
    if (month == 6 && day >= 20 || month == 7 && day <= 18) {
        item = array[6];
    }
    if (month == 7 && day >= 20 || month == 8 && day <= 18) {
        item = array[7];
    }
    if (month == 8 && day >= 20 || month == 9 && day <= 18) {
        item = array[8];
    }
    if (month == 9 && day >= 20 || month == 10 && day <= 18) {
        item = array[9];
    }
    if (month == 10 && day >= 20 || month == 11 && day <= 18) {
        item = array[10];
    }
    if (month == 11 && day >= 20 || month == 12 && day <= 18) {
        item = array[11];
    }
    if (isGoodDate(month, day) == false) {
        item = array[12];
    }

    return item;
}

function getBirthday(birthMonth, birthDate) {
    var d = new Date();
    var message = "";
    var thisMonth = d.getMonth() + 1;
    var thisDay = d.getDate();

    if (thisMonth == birthMonth && thisDay == birthDate) {
        message += "First of all, happy birthday. ";
    }

    return message;
}

function nameExists(name) {
    var result = "Welcome, anonymous user. ";
    if (name.length > 0) {
        result = "Ah, " + name + "... ";
    }
    return result;
}