const Koa = require('koa');
const app = new Koa();
var objectMapper = require('object-mapper');

app.use(async ctx => {
  const fatiha = await fetch("https://api.alquran.cloud/v1/surah/1");
  const fatihaJson = await fatiha.json()
  var map = {
    "data.name":"name",
    "data.numberOfAyahs":"numberOfAyahs",
    "data.ayahs[2]":"3rd ayah ",
    "data.ayahs[].text":"texts"
  }
  var x = objectMapper(fatihaJson,map);
  ctx.body = x;
});

app.listen(3000);
