const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  const fatiha = await fetch("");
  const fatihaJson = await fatiha.json()
  var map = {
    "data.name":"name",
    "data.numberOfAyahs":"numberOfAyahs",
    "data.ayahs[2]":"3rd ayah "
  }
  var x = objectMapper(fatihaJson,map);
  ctx.body = x;
});

app.listen(3000);
