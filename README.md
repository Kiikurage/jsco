#jsco

JavaScript で Cocoaプログラミング

![screenshot](https://raw.githubusercontent.com/kikura-yuichiro/jsco/master/screenshot.png)

##原理

OSX 10.10 Yosemiteで実装された、JavascriptをAppleScriptに変換する機能を用いる。JavaScriptで記述しやすいよう、CocoaクラスをラッピングしたJSクラスを提供している。

##構成

###src

ライブラリファイル。packjsでパックして用いる。
packjsについては、[こちら](https://github.com/kikura-yuichiro/packjs)を参照。
利用方法はsample/sample.jsを参照。

###sample

サンプルアプリ。コンパイル済み。

##コンパイル方法

例えば、サンプルアプリの場合、以下のコマンドでコンパイル・実行が可能。

```bash
cd /(path_to_jsco_folder)/sample
rm -r ./sample/sample.app
packjs ./sample/sample.js ./sample/sample_packed.js
osacompile -l JavaScript -s -x -o ./sample/sample.app ./sample/sample_packed.js
open ./sample/sample.app
```