'use strict';

const { series, src, dest} = require('gulp');   
const sass = require('gulp-sass');  //编译gulp工具
const autoprefixer = require('gulp-autoprefixer');  //添加厂商前缀
const cssmin = require('gulp-cssmin');  //压缩css

function compile(){
    return src('./src/*.scss')   //从文件系统读取对象并返回管道的开始或中间使用的流
        .pipe(sass.sync())      //编译sass
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],    //主流浏览器的最新两个版本加前缀
            cascade:false       //是否美化属性值
        }))
        .pipe(cssmin())         //压缩css
        .pipe(dest('./lib'));   //指定编译后输出的css目录
}


function copyfont(){
    return src('./src/fonts/**')    //读取src/fonts所有的文件
        .pipe(cssmin())
        .pipe(dest('./lib/fonts')); //输出
}


exports.build = series(compile,copyfont)     //函数组合然后按顺序依次执行

