# WordPress 仮想環境

## 必須

* Docker
* Docker Compose
* Node.js LTS（v14以降での動作を確認。古すぎるとダメかも）
* npm

## インストール方法

```
$ npm i -D // wp-env, wp-scripts をインストール
$ npm run env start // @wordpress/env 仮想環境の立ち上げ
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
$ npm run watch:sass // Scssのみ監視
$ npm run watch // Scss監視＋ブラウザ自動リロード
```

Browsersync 設定は bs-config.js にて適宜変更して使用すること。

納品用データコンパイル用に [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env) を併用。IE対応などが必要な際に。

```
$ npm run compile:postcss // 本番用コンパイル
```

## 画像軽量化

[imagemin](https://www.npmjs.com/package/imagemin) を使用。コンパイル設定は imagemin.js に記述。

```
$ npm run min:img // 画像コンパイル
```

## コード検証（stylelint, ESLint）

```
$ npm run lint:sass // SCSS
$ npm run lint:js // JS
```

参考 [stylelint](https://stylelint.io/) ,  [ESLint](https://eslint.org/) 

## JS圧縮（UglifyJS 3）

```
$ uglifyjs ./cms/wp-content/themes/blank_theme/src/js/main.js -c -o ./cms/wp-content/themes/blank_theme/assets/js/main.min.js

or

$ npm run min:js
```

参考 [UglifyJS 3](https://www.npmjs.com/package/uglify-js)
