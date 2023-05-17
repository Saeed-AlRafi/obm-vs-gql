const Koa = require('koa');
const app = new Koa();
var objectMapper = require('object-mapper');

app.use(async ctx => {
  const fatiha = await fetch("https://api.alquran.cloud/v1/surah/1");
  const fatihaJson = await fatiha.json()
  var map = {
    "data.name":"name",
    "data.numberOfAyahs":"numberOfAyahs",
    "data.ayahs[]":{
      key: "3rd ayah",
      transform:function(value){
        for (let i = 0; i < value.length; i++){
          if (value[i].number == 3)
            return value[i]
        }
      }
    },
    "data.ayahs[].text":"texts"
  }
  var x = objectMapper(fatihaJson,map);
  ctx.body = x;
});

app.listen(3000);
