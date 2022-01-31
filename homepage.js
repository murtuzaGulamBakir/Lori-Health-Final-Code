// checkout
// Firebase

$(document).ready(function () {
  $("#quiz-check").validate({
    rules: {
      age: {
        required: true,
        number: true,
        minlength: 1,
        maxlength: 3,
        min: 18,
        max: 120,
      },
      gender: {
        required: true,
      },
      height: {
        required: true,
        number: true,
        minlength: 2,
        maxlength: 3,
        min: 50,
        max: 280,
      },
      weight: {
        required: true,
        number: true,
        minlength: 2,
        maxlength: 3,
        min: 15,
        max: 500,
      },

      issues: {
        required: true,
      },
      dailyactivity: {
        required: true,
      },
      usualmood: {
        required: true,
      },
      email: {
        required: true,
        minlength: 5,
        maxlength: 45,
        email: true,
      },
    },

    messages: {
      age: {
        minlength: "! Age should be 1 digit atleast",
        maxlength: "! Age cannot be more than 3 digit",
        min: "! Number should be between 18 to 120",
        max: "! Number should be between 18 to 120",
      },

      height: {
        minlength: "! Height should be 2 digit atleast",
        maxlength: "! Height atmost 3 digit",
        min: "! Number should be between 50 to 280",
        max: "! Number should be between 50 to 280",
      },
      weight: {
        minlength: "! Weight should be 2 digit atleast",
        maxlength: "! Weight atmost 3 digit",
        min: "! Number should be between 15 to 500",
        max: "! Number should be between 15 to 500",
      },
      email: {
        email: "Email should be in the format: abc@domain.tld",
      },
    },
  });
});

// var form = document.getElementById("quiz-check");
// function handleForm(event) {
//   event.preventDefault();
// }
// form.addEventListener("submit", handleForm);
$(function () {
  $(".sev_check").click(function (e) {
    $(".sev_check").not(this).prop("checked", false);
  });
});
$(function () {
  $(".sev_check-dailyactivity").click(function (e) {
    $(".sev_check-dailyactivity").not(this).prop("checked", false);
  });
});

$(function () {
  $(".sev_check-usualmood").click(function (e) {
    $(".sev_check-usualmood").not(this).prop("checked", false);
  });
});

// $(function () {
//   $(".sev_check-issues").click(function (e) {
//     $(".sev_check-issues").not(this).prop("checked", false);
//   });
// });

var age = document.quizform.age.value;
var weight = document.quizform.weight.value;
var height = document.quizform.height.value;
var gender;
var dailyactivity;
var clinicalissue = 0;
var usualmood;
var bmi, bodyfat;
var bmiscore,
  bodyfatscore,
  dailyactivityscore,
  usualmoodscore,
  clinicalissuescore,
  healthscore;
var stage = 0;
var email;
var quizreport;
function calculateHealthScore() {
  age = document.quizform.age.value;
  weight = document.quizform.weight.value;
  height = document.quizform.height.value;
  email = document.quizform.email.value;
  console.log(email);
  //gender find

  gender = document.getElementById("inlineCheckbox1gender").checked;
  gender = gender ? "male" : "female";

  // find clinical issue checkbox
  let i;

  var temp = document.getElementsByClassName("sev_check-issues");

  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      if (temp[i].parentElement.children[1].innerHTML === "No Clinical Issue") {
        // console.log("Broked No clinical issue,", clinicalissue);
        break;
      } else {
        clinicalissue += 1;
      }
    }
  }

  // find dailyactivity
  temp = document.getElementsByClassName("sev_check-dailyactivity");
  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      dailyactivity = temp[i].parentElement.children[1].innerHTML;
    }
  }

  // find usualmood sev_check-usualmood
  temp = document.getElementsByClassName("sev_check-usualmood");
  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      usualmood = temp[i].parentElement.children[1].innerHTML;
    }
  }
  // console.log(clinicalissue, usualmood, dailyactivity);
  // calculating bmi score

  bmi = (1.3 * weight) / Math.pow(height / 100, 2.5);
  console.log("bmi", bmi);
  if (gender === "male") {
    bodyfat = 1.2 * bmi + 0.23 * age - 16.2;
  } else {
    bodyfat = 1.2 * bmi + 0.23 * age - 5.4;
  }

  console.log("bodyfat", bodyfat);

  if (bmi < 18.5) {
    bmiscore = 9;
  } else if (bmi >= 18.5 && bmi <= 22.9) {
    bmiscore = 10;
  } else if (bmi >= 23 && bmi <= 24.9) {
    bmiscore = 9;
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiscore = 7.5;
  } else if (bmi >= 30 && bmi <= 34.99) {
    bmiscore = 6;
  } else if (bmi >= 35 && bmi <= 39.99) {
    bmiscore = 4.5;
  } else if (bmi >= 40) {
    bmiscore = 3;
  }
  // console.log(bmi);
  console.log("Bmi score", bmiscore);

  //Calculating bofyfat score female
  if (gender === "female") {
    if (age >= 18 && age <= 29) {
      if (bodyfat < 14) {
        bodyfatscore = 8;
      } else if (bodyfat >= 14 && bodyfat <= 16.5) {
        bodyfatscore = 10;
      } else if (bodyfat >= 16.6 && bodyfat <= 19.4) {
        bodyfatscore = 9;
      } else if (bodyfat >= 19.5 && bodyfat <= 22.7) {
        bodyfatscore = 8;
      } else if (bodyfat >= 22.8 && bodyfat <= 27.1) {
        bodyfatscore = 5;
      } else if (bodyfat >= 27.2) {
        bodyfatscore = 3;
      }
    }

    if (age >= 30 && age <= 39) {
      if (bodyfat < 14) {
        bodyfatscore = 8;
      } else if (bodyfat >= 14 && bodyfat <= 17.4) {
        bodyfatscore = 10;
      } else if (bodyfat >= 17.5 && bodyfat <= 20.8) {
        bodyfatscore = 9;
      } else if (bodyfat >= 20.9 && bodyfat <= 24.6) {
        bodyfatscore = 8;
      } else if (bodyfat >= 24.7 && bodyfat <= 29.1) {
        bodyfatscore = 5;
      } else if (bodyfat >= 29.2) {
        bodyfatscore = 3;
      }
    }

    if (age >= 40 && age <= 49) {
      if (bodyfat < 14) {
        bodyfatscore = 8;
      } else if (bodyfat >= 14 && bodyfat <= 19.8) {
        bodyfatscore = 10;
      } else if (bodyfat >= 19.9 && bodyfat <= 23.8) {
        bodyfatscore = 9;
      } else if (bodyfat >= 23.9 && bodyfat <= 27.6) {
        bodyfatscore = 8;
      } else if (bodyfat >= 27.7 && bodyfat <= 31.2) {
        bodyfatscore = 5;
      } else if (bodyfat >= 31.3) {
        bodyfatscore = 3;
      }
    }
    if (age >= 50 && age <= 59) {
      if (bodyfat < 14) {
        bodyfatscore = 8;
      } else if (bodyfat >= 14 && bodyfat <= 22.5) {
        bodyfatscore = 10;
      } else if (bodyfat >= 22.6 && bodyfat <= 27) {
        bodyfatscore = 9;
      } else if (bodyfat >= 27.1 && bodyfat <= 30.4) {
        bodyfatscore = 8;
      } else if (bodyfat >= 30.5 && bodyfat <= 34.5) {
        bodyfatscore = 5;
      } else if (bodyfat >= 34.6) {
        bodyfatscore = 3;
      }
    }
    if (age >= 60) {
      if (bodyfat < 14) {
        bodyfatscore = 8;
      } else if (bodyfat >= 14 && bodyfat <= 23.2) {
        bodyfatscore = 10;
      } else if (bodyfat >= 23.3 && bodyfat <= 27.9) {
        bodyfatscore = 9;
      } else if (bodyfat >= 28 && bodyfat <= 31.3) {
        bodyfatscore = 8;
      } else if (bodyfat >= 31.4 && bodyfat <= 35.4) {
        bodyfatscore = 5;
      } else if (bodyfat >= 35.5) {
        bodyfatscore = 3;
      }
    }
  }
  //Calculating bofyfat score male
  if (gender === "male") {
    if (age >= 18 && age <= 29) {
      if (bodyfat < 8) {
        bodyfatscore = 8;
      } else if (bodyfat >= 8 && bodyfat <= 10.5) {
        bodyfatscore = 10;
      } else if (bodyfat >= 10.6 && bodyfat <= 14.8) {
        bodyfatscore = 9;
      } else if (bodyfat >= 14.9 && bodyfat <= 18.6) {
        bodyfatscore = 8;
      } else if (bodyfat >= 18.7 && bodyfat <= 23.1) {
        bodyfatscore = 5;
      } else if (bodyfat >= 23.2) {
        bodyfatscore = 3;
      }
    }

    if (age >= 30 && age <= 39) {
      if (bodyfat < 8) {
        bodyfatscore = 8;
      } else if (bodyfat >= 8 && bodyfat <= 14.5) {
        bodyfatscore = 10;
      } else if (bodyfat >= 14.6 && bodyfat <= 18.2) {
        bodyfatscore = 9;
      } else if (bodyfat >= 18.3 && bodyfat <= 21.3) {
        bodyfatscore = 8;
      } else if (bodyfat >= 21.4 && bodyfat <= 24.9) {
        bodyfatscore = 5;
      } else if (bodyfat >= 25) {
        bodyfatscore = 3;
      }
    }

    if (age >= 40 && age <= 49) {
      if (bodyfat < 8) {
        bodyfatscore = 8;
      } else if (bodyfat >= 8 && bodyfat <= 17.4) {
        bodyfatscore = 10;
      } else if (bodyfat >= 17.5 && bodyfat <= 20.6) {
        bodyfatscore = 9;
      } else if (bodyfat >= 20.7 && bodyfat <= 23.4) {
        bodyfatscore = 8;
      } else if (bodyfat >= 23.5 && bodyfat <= 26.6) {
        bodyfatscore = 5;
      } else if (bodyfat >= 26.7) {
        bodyfatscore = 3;
      }
    }
    if (age >= 50 && age <= 59) {
      if (bodyfat < 8) {
        bodyfatscore = 8;
      } else if (bodyfat >= 8 && bodyfat <= 19.1) {
        bodyfatscore = 10;
      } else if (bodyfat >= 19.2 && bodyfat <= 22.1) {
        bodyfatscore = 9;
      } else if (bodyfat >= 22.2 && bodyfat <= 24.6) {
        bodyfatscore = 8;
      } else if (bodyfat >= 24.7 && bodyfat <= 27.8) {
        bodyfatscore = 5;
      } else if (bodyfat >= 27.9) {
        bodyfatscore = 3;
      }
    }
    if (age >= 60) {
      if (bodyfat < 8) {
        bodyfatscore = 8;
      } else if (bodyfat >= 8 && bodyfat <= 19.7) {
        bodyfatscore = 10;
      } else if (bodyfat >= 19.8 && bodyfat <= 22.6) {
        bodyfatscore = 9;
      } else if (bodyfat >= 22.7 && bodyfat <= 25.2) {
        bodyfatscore = 8;
      } else if (bodyfat >= 25.3 && bodyfat <= 28.4) {
        bodyfatscore = 5;
      } else if (bodyfat >= 28.5) {
        bodyfatscore = 3;
      }
    }
  }

  console.log("Bodyfat score", bodyfatscore);
  // calculating dailyactivityscore
  if (dailyactivity === "Sedentary") {
    dailyactivityscore = 5;
  } else if (dailyactivity === "Moderately Active") {
    dailyactivityscore = 7.5;
  } else if (dailyactivity === "Very Active") {
    dailyactivityscore = 10;
  } else if (dailyactivity === "Extra Active") {
    dailyactivityscore = 12;
  }

  console.log("dailyactivityscore", dailyactivityscore);

  // calculating usualmoodscore
  if (usualmood === "Pleasant + Energized") {
    usualmoodscore = 10;
  } else if (usualmood === "Pleasant + Calm") {
    usualmoodscore = 10;
  } else if (usualmood === "Unpleasant + Energized") {
    usualmoodscore = 6;
  } else if (usualmood === "Unpleasant + Calm") {
    usualmoodscore = 7.5;
  }
  console.log("usual mood score", usualmoodscore);

  // calculating  clinicalissuescore
  if (clinicalissue == 0) {
    clinicalissuescore = 10;
  } else if (clinicalissue == 1) {
    clinicalissuescore = 7.5;
  } else if (clinicalissue == 2) {
    clinicalissuescore = 5;
  } else if (clinicalissue >= 3) {
    clinicalissuescore = 2.5;
  }

  console.log("ClinicalIssue", clinicalissuescore);
  // calculate health score

  healthscore =
    bmiscore * 0.2 +
    bodyfatscore * 0.4 +
    clinicalissuescore * 0.2 +
    dailyactivityscore * 0.15 +
    usualmoodscore * 0.05;

  console.log("Health Score", Math.round(healthscore));
}
function handlestart() {
  document.getElementById("start-quiz").style.display = "none";
  document.getElementById("ques-1").style.display = "block";
  document.getElementById("next-button-wrapper").style.display = "block";
  stage++;
}
function handleage() {
  age = document.quizform.age.value;
  console.log(age);
  if (age >= 18 && age <= 120) {
    document.getElementById("ques-1").style.display = "none";
    document.getElementById("ques-2").style.display = "block";
    stage++;
  } else {
    alert("Age should be between 18 to 120");
  }
}
function handlegender() {
  if (
    document.getElementById("inlineCheckbox1gender").checked ||
    document.getElementById("inlineCheckbox2gender").checked
  ) {
    document.getElementById("ques-2").style.display = "none";
    document.getElementById("ques-3").style.display = "block";
    stage++;
  } else {
    alert("Select Gender");
  }
}
function handleheight() {
  height = document.quizform.height.value;
  if (height >= 50 && height <= 280) {
    document.getElementById("ques-3").style.display = "none";
    document.getElementById("ques-4").style.display = "block";
    stage++;
  } else {
    alert("Height should be between 50 to 280 centimetres(cm)");
  }
}
function handleweight() {
  weight = document.quizform.weight.value;
  if (weight >= 15 && weight <= 500) {
    document.getElementById("ques-4").style.display = "none";
    document.getElementById("ques-5").style.display = "block";
    stage++;
  } else {
    alert("Weight should between be 15 to 500  Kilograms(kg)");
  }
}

function handleclinicalissue() {
  temp = document.getElementsByClassName("sev_check-issues");

  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      if (
        temp[i].parentElement.children[1].innerHTML === "No Clinical Issue" &&
        (temp[i + 1].checked ||
          temp[i + 2].checked ||
          temp[i + 3].checked ||
          temp[i + 4].checked)
      ) {
        alert("Not allowed ! Select either issues or none");
        break;
      } else {
        document.getElementById("ques-5").style.display = "none";
        document.getElementById("ques-6").style.display = "block";
        stage++;
        break;
      }
    }
  }
}

function handledailyactivity() {
  temp = document.getElementsByClassName("sev_check-dailyactivity");
  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      document.getElementById("ques-6").style.display = "none";
      document.getElementById("ques-7").style.display = "block";
      stage++;
      break;
    }
  }
  if (i == temp.length) {
    alert("Select the Option!");
  }
}

function handledailymood() {
  temp = document.getElementsByClassName("sev_check-usualmood");
  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked) {
      document.getElementById("ques-7").style.display = "none";
      document.getElementById("next-button").innerHTML = "Submit";

      document.getElementById("ques-8").style.display = "block";
      stage++;
      break;
    }
  }
  if (i == temp.length) {
    alert("Select the Option!");
  }
}

function handleemail() {
  email = document.quizform.email.value;
  if (email) {
    document.getElementById("ques-8").style.display = "none";
    calculateHealthScore();
    document.getElementById(
      "results-text"
    ).innerHTML = `Your Health Score is <div class="results-text-red"> ${Math.round(
      healthscore
    )} out of 10</div>`;
    document.getElementById("next-button-wrapper").style.display = "none";
    document.getElementById("results").style.display = "block";
    handleFirebase();
  } else {
    alert("Enter email address !");
  }
}
function handlenext() {
  if (stage == 0) {
    handlestart();
  } else if (stage == 1) {
    handleage();
  } else if (stage == 2) {
    handlegender();
  } else if (stage == 3) {
    handleheight();
  } else if (stage == 4) {
    handleweight();
  } else if (stage == 5) {
    handleclinicalissue();
  } else if (stage == 6) {
    handledailyactivity();
  } else if (stage == 7) {
    handledailymood();
  } else if (stage == 8) {
    handleemail();
  }
}

function handleFirebase() {
  age = document.quizform.age.value;
  weight = document.quizform.weight.value;
  height = document.quizform.height.value;
  email = document.quizform.email.value;
  clinicalissue, dailyactivity, usualmood, healthscore;
  quizreport = {
    email: email,
    healthscore: Math.round(healthscore),
    age: age,
    weight: weight,
    height: height,
    clinicalissue: clinicalissue,
    dailyactivity: dailyactivity,
    usualmood: usualmood,
    gender: gender,
    bmi: bmi,
    bodyfat: bodyfat,
    bmiscore: bmiscore,
    bodyfatscore: bodyfatscore,
    dailyactivityscore: dailyactivityscore,
    usualmoodscore: usualmoodscore,
    clinicalissuescore: clinicalissuescore,
  };
  localStorage.setItem("quizReport", JSON.stringify(quizreport));
}
