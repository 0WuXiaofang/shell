//编写接口请求
var port =process.env.PORT||config.dev.port
var proxyTable =config.dev.proxyTable
//使用express
var app
app = express()
var  compiler=webpack(webpackConfig)
//中间件
var devMiddleware =require("webpack-dev-middleware")(compiler,{
  publicPath:webpackConfig.output.publicPath,
  stats:{
    color:true,
    chunks:false
  }
})
var hotMiddlewear =require('webpack-hot-middlleware')(compiler)
compiler.plugins('compilatio',function (compilation){

})
var appData=require("../data.json");
const {config} = require('shelljs')
var seller=appData.seller;
var goods=appData.goods;
var reatings=appData.ratings;
//定义路由
var apiRoutes =express.Router();
apiRoutes=express.Router();

//定义接口
//商品售出
apiRoutes.get("/seller",function (req,res){
  res.json({
    //定义返回数据
    errno:0,
    data:seller
  });
});

//评论相关
apiRoutes.get("ratings",function (req,res){
  res.json({
    errno:0,
    data:ratings
  });
});
//商品信息
apiRoutes.get("goods",function (req,res){
  res.json({
    errno:0,
    data:goods
  });
});
app.usage('api',apiRoutes);
// var compiler =webpack(webpackConfig)
//



