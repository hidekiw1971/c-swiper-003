# compornent（共通部品）

## イメージ画像

<img width="409" alt="image" src="https://user-images.githubusercontent.com/99580997/160584080-454ea56f-ee6f-4b6e-802e-7ebbe59462d7.png">
<img width="785" alt="image" src="https://user-images.githubusercontent.com/99580997/160584137-4ddcff42-4ee6-4a4f-9427-4262ae72d90d.png">
<img width="1160" alt="image" src="https://user-images.githubusercontent.com/99580997/160584189-736fbe5c-0432-46b8-b8c9-649895cabd0b.png">

## 概要

- swiper(cdn、navigation、pagination 外側に設置、非自動)
- cdn を利用(swiper@8)　※注意事項を参照！
- `<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"`
- `swiper`(`pagination` 外側に設置)
- `pagination`の位置調整は`.swiper-wrapper`で調整する。

## 仕様

- スマホファースト
- rem 記述
- ルートフォントを vw で設定していることから PC サイズのレイアウトをタブレットで表示させることが出来ます（rem で書いた場合のみ）。
- xxx

## 注意事項

- `swiper@8`を利用する場合、`reset.scss`の`text-rendering: optimizeSpeed;`をコメントにする必要があります。
- コメントにしないと`navigation`が表示されません。
- `body {`
- `min-height: 100vh;`
- `// text-rendering: optimizeSpeed;`
- `line-height: 1.5;`
- `}`

## 使い方

- 「copy start」から「copy end」をコピペ。
- css: src -> module -> xxx をコピペ。

## w3c html チェック結果

- https://validator.w3.org/nu/
- <img width="761" alt="image" src="https://user-images.githubusercontent.com/99580997/160584277-24df9994-5d5d-420f-b68f-13c91e38db15.png">

## w3c css チェック結果

- https://jigsaw.w3.org/css-validator/
- <img width="923" alt="image" src="https://user-images.githubusercontent.com/99580997/160584357-b58865d2-c595-4dd7-8750-07b99a562d6b.png">

## portfolio url:

- https://c-0040.wtb.cfbx.jp/

## 参考にしたサイト

- swiperjs.com
- https://swiperjs.com/get-started
- 【実装例あり】スライダー Swiper.js の基本的な使い方、機能解説
- https://kiomiru.co.jp/blog/coding/swiper-js/
- Swiper.js のページネーションをスライダーの外側に移動する方法【CSS】(そのままでは実装できないが、ヒントになったサイト)
- https://2tt1.org/swiper-pagination-move

## 更新履歴

- 2022/3/29 autoplay 機能を実装完了
- 2022/3/29 初版 作成完了(ノーマルパターン、非自動)

## 環境・使い方

- ダウンロードしたフォルダを開く。
- ターミナルを開き、 npm i とコマンドを入力する。
- node_modules と package-lock.json が生成されるのを確認する。
- 「 npx gulp 」とコマンドを入力すると動き出します。

## 備考
