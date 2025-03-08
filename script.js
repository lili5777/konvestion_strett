function konver() {
  let input = document.getElementById("nilai").value;
  let jarak1 = document.getElementById("jarak1").value;
  let jarak2 = document.getElementById("jarak2").value;
  let output = document.getElementById("output");

  if (jarak1 == "meter" && jarak2 == "kilometer") {
    const hasil = input / 1000;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "meter" && jarak2 == "centimeter") {
    const hasil = input * 100;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "centimeter" && jarak2 == "meter") {
    const hasil = input / 100;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "centimeter" && jarak2 == "kilometer") {
    const hasil = input / 100000;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "meter" && jarak2 == "kilometer") {
    const hasil = input / 1000;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "kilometer" && jarak2 == "centimeter") {
    const hasil = input * 100000;
    output.innerText = "Nilai Input: " + hasil;
  } else if (jarak1 == "kilometer" && jarak2 == "meter") {
    const hasil = input * 1000;
}
