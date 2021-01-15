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

[node-sass](https://www.npmjs.com/package/node-sass) を使用。

```
$ npm run watch:scss // Scssのみ監視
$ npm run watch // Scss監視＋ブラウザ自動リロード
$ npm run compile:css // 本番用コンパイル
```

設定は bs-config.js にて適宜変更して使用すること。

## コード検証（stylelint, ESLint）

```
$ npm run lint:scss // SCSS
$ npm run lint:js // JS
```

参考 [stylelint](https://stylelint.io/) ,  [ESLint](https://eslint.org/) 


