const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);

let krill_tbx = $("#krill"),
  latin_tbx = $("#latin");

$$("#delete-all").forEach((item) => {
  item.addEventListener("click", () => {
    latin_tbx.value = "";
    krill_tbx.value = "";
  });
});

$("#copy-latin").addEventListener("click", () => {
  latin_tbx.select();
  document.execCommand("copy");
});

$("#copy-krill").addEventListener("click", () => {
  krill_tbx.select();
  document.execCommand("copy");
});

latin_tbx.addEventListener(
  "scroll",
  function (e) {
    krill_tbx.scrollTop = latin_tbx.scrollTop;
  },
  false
);
krill_tbx.addEventListener(
  "scroll",
  function (e) {
    latin_tbx.scrollTop = krill_tbx.scrollTop;
  },
  false
);

latin_tbx.addEventListener("keyup", () => {
  krill_tbx.value = latin_krill(latin_tbx.value);
});

krill_tbx.addEventListener("keyup", () => {
  latin_tbx.value = krill_latin(krill_tbx.value);
});

const latin_krill = (str) => {
  return str
    .replace(/ya|yA/g, "я")
    .replace(/Ya|YA/g, "Я")
    .replace(/yo'|yo|yO'|yO/g, "ё")
    .replace(/Yo'|Yo|YO'|YO/g, "Ё")
    .replace(/ye|yE|e/g, "е")
    .replace(/YE|Ye|E/g, "Е")
    .replace(/o'/g, "ў")
    .replace(/O'/g, "Ў")
    .replace(/g'/g, "ғ")
    .replace(/G'/g, "Ғ")
    .replace(/sh|sH/g, "ш")
    .replace(/SH|Sh/g, "Ш")
    .replace(/ch|cH/g, "ч")
    .replace(/CH|Ch/g, "Ч")
    .replace(/yu|yU/g, "ю")
    .replace(/Yu|YU/g, "Ю")
    .replace(/a/g, "а")
    .replace(/A/g, "А")
    .replace(/b/g, "б")
    .replace(/B/g, "Б")
    .replace(/d/g, "д")
    .replace(/D/g, "Д")
    .replace(/f/g, "ф")
    .replace(/F/g, "Ф")
    .replace(/g/g, "г")
    .replace(/G/g, "Г")
    .replace(/h/g, "ҳ")
    .replace(/H/g, "Ҳ")
    .replace(/i/g, "и")
    .replace(/I/g, "И")
    .replace(/j/g, "ж")
    .replace(/J/g, "Ж")
    .replace(/k/g, "к")
    .replace(/K/g, "К")
    .replace(/l/g, "л")
    .replace(/L/g, "Л")
    .replace(/m/g, "м")
    .replace(/M/g, "М")
    .replace(/n/g, "н")
    .replace(/N/g, "Н")
    .replace(/o/g, "о")
    .replace(/O/g, "О")
    .replace(/p/g, "п")
    .replace(/P/g, "П")
    .replace(/q/g, "қ")
    .replace(/Q/g, "Қ")
    .replace(/r/g, "р")
    .replace(/R/g, "Р")
    .replace(/s/g, "с")
    .replace(/S/g, "С")
    .replace(/t/g, "т")
    .replace(/T/g, "Т")
    .replace(/u/g, "у")
    .replace(/U/g, "У")
    .replace(/v/g, "в")
    .replace(/V/g, "В")
    .replace(/x/g, "х")
    .replace(/X/g, "Х")
    .replace(/y/g, "й")
    .replace(/Y/g, "Й")
    .replace(/z/g, "з")
    .replace(/Z/g, "З")
    .replace(/'/g, "ъ");
};
const krill_latin = (str) => {
  return str
    .replace(/Ы/g, "i")
    .replace(/ы/g, "i")
    .replace(/я/g, "ya")
    .replace(/Я/g, "Ya")
    .replace(/ё/g, "yo")
    .replace(/Ё/g, "Yo")
    .replace(/е/g, "ye")
    .replace(/Е/g, "Ye")
    .replace(/ў/g, "o'")
    .replace(/Ў/g, "O'")
    .replace(/ғ/g, "g'")
    .replace(/Ғ/g, "G'")
    .replace(/ш/g, "sh")
    .replace(/Ш/g, "Sh")
    .replace(/ч/g, "ch")
    .replace(/Ч/g, "Ch")
    .replace(/ю/g, "yu")
    .replace(/Ю/g, "Yu")
    .replace(/э/g, "e")
    .replace(/Э/g, "E")
    .replace(/а/g, "a")
    .replace(/А/g, "A")
    .replace(/б/g, "b")
    .replace(/Б/g, "B")
    .replace(/д/g, "d")
    .replace(/Д/g, "D")
    .replace(/е/g, "e")
    .replace(/Е/g, "E")
    .replace(/ф/g, "f")
    .replace(/Ф/g, "F")
    .replace(/г/g, "g")
    .replace(/Г/g, "G")
    .replace(/ҳ/g, "h")
    .replace(/Ҳ/g, "H")
    .replace(/и/g, "i")
    .replace(/И/g, "I")
    .replace(/ж/g, "j")
    .replace(/Ж/g, "J")
    .replace(/к/g, "k")
    .replace(/К/g, "K")
    .replace(/л/g, "l")
    .replace(/Л/g, "L")
    .replace(/м/g, "m")
    .replace(/М/g, "M")
    .replace(/н/g, "n")
    .replace(/Н/g, "N")
    .replace(/о/g, "o")
    .replace(/О/g, "O")
    .replace(/п/g, "p")
    .replace(/П/g, "P")
    .replace(/қ/g, "q")
    .replace(/Қ/g, "Q")
    .replace(/р/g, "r")
    .replace(/Р/g, "R")
    .replace(/с/g, "s")
    .replace(/С/g, "S")
    .replace(/т/g, "t")
    .replace(/Т/g, "T")
    .replace(/у/g, "u")
    .replace(/У/g, "U")
    .replace(/в/g, "v")
    .replace(/В/g, "V")
    .replace(/х/g, "x")
    .replace(/Х/g, "X")
    .replace(/й/g, "y")
    .replace(/Й/g, "Y")
    .replace(/з/g, "z")
    .replace(/З/g, "Z")
    .replace(/ъ/g, "'")
    .replace(/Ъ/g, "'");
};
