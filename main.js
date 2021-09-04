var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start() {
  document.getElementById("textbox").innerHTML = "";
  Recognition.start();
}

Recognition.onresult = function (event) {
  console.log(event);
  var Content = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = Content;
  console.log(Content);
  if (Content == "Cheese") {
    console.log("Cheeeeeeeeeeeeeese");
    speak();
  }
};

function speak() {
  var synth = window.speechSynthesis;
  speak_data =
    "Say Cheeeeeeeeeeeeeese ---- Taking your selfie in three seconds";
  var utter_this = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utter_this);
  Webcam.attach(camera);
  setTimeout(function () {
    take_snapshot();
    save();
  }, 3000);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 90,
});

camera = document.getElementById("camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      '<img id="selfie_img" src="' + data_uri + '">';
  });
}

function save() {
  var link = document.getElementById("link");
  img = document.getElementById("selfie_img").src;
  link.href = img;
  link.click();
}
