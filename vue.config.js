let goods = require('./public/common/data/goods.json');
let ratings = require('./public/common/data/ratings.json');
let seller = require('./public/common/data/seller.json');

module.exports = {
    publicPath:'./',
    devServer:{
        open: true,
        host:'localhost',
        https:false,
        hotOnly:false,
        before(app){
            app.get('/goods',(req,res)=>{
                res.json(goods);
            }),
            app.get('/ratings',(req,res)=>{
                res.json(ratings)
            }),
            app.get('/seller',(req,res)=>{
                res.json(seller);
            })
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: false,
        theme: false
      }
    }
}
