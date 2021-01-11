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
```

詳細は [@wordpress/env 公式ドキュメントページ](https://ja.wordpress.org/team/handbook/block-editor/packages/packages-env/) を参照。

環境が立ち上がったら、admin / password でログイン→管理画面の言語・タイムゾーン等を適宜変更する。

## WP-CLIを使う

```
$ npm wp-env run cli wp コマンド // 本来のコマンド
$ npm run wp コマンド // 短縮形を登録しているのでこの形でも動く。
```

参考 [WP-CLI Commands公式ドキュメントページ](https://developer.wordpress.org/cli/commands/) 




