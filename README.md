#JSCO

JavaScript で Cocoaプログラミング

#理屈

OSX 10.10Yosemiteで実装された、JavascriptをAppleScriptに変換する機能を用いる。JavaScriptで記述しやすいよう、CocoaクラスをラッピングしたJSクラスを提供している。

##構成

###main.js

エントリポイント

###JS~~~.js

ライブラリファイル。packjsでパックして用いる。
packjsについては、[こちら](https://github.com/kikura-yuichiro/packjs)を参照。

###_build.js

packjsでビルドした出力ファイル。

##実行方法

コマンドラインで以下を実行することでコンパイル・実行が可能。

```bash
cd /(path_to_jsco)/jsco
rm -rf ./_build.app
osacompile -l JavaScript -s -x -o ./_build.app _build.js
open ./_build.app
```