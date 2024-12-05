# WordPress 仮想環境

## 必須

* Docker
* Docker Compose
* Node.js LTS（v14以降での動作を確認。古すぎるとダメかも）
* npm

## インストール方法

```
$ npm i -D // wp-env, wp-scripts をインストール
$ npm run env:init // 初回起動用コマンド。立ち上げ後、同梱のデフォルトテーマを削除し、自前テーマを有効化する

$ npm run env start // @wordpress/env 仮想環境の立ち上げ（通常）
$ open "http://localhost:4444/wp-admin"
$ npm run env stop // @wordpress/env 仮想環境の停止
```
使用するテーマ名、プラグインの指定やコアのバージョン指定、ポート番号の変更などは .wp-env.json を編集する。

詳細は [@wordpress/env 公式ドキュメントページ](https://ja.wordpress.org/team/handbook/block-editor/packages/packages-env/) を参照のこと。

環境が立ち上がったら、admin / password でログイン→管理画面の言語・タイムゾーン等を適宜変更する。


## WP-CLIを使う

```
$ npm run env run cli wp コマンド // 本来のコマンド
$ npm run wp コマンド // packages.json 内で短縮形を登録しているのでこの形でも動く。
```

（例）WordPress コアのバージョンを確認するコマンド
```
$ npm run wp core version 
```

参考 [WP-CLI Commands公式ドキュメントページ](https://developer.wordpress.org/cli/commands/) 

## Sassを使う

[Dirt Sass](https://www.npmjs.com/package/sass) を使用。

```
$ npm run watch // scss, js監視＋ブラウザ自動リロード
```

Browsersync 設定は bs-config.js にて適宜変更して使用すること。

## JS圧縮（UglifyJS）

```
$ npm run min:js
```

参考 [UglifyJS](https://www.npmjs.com/package/uglify-js)

## 本番用コンパイル
納品用データコンパイル用に [postcss](https://www.npmjs.com/package/postcss) を併用。autoprefixer, cssnano を使用。

```
$ npm run build // 本番用コンパイル
```

