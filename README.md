# Hakoirimusume React App
箱入り娘。スライドパズルの一種です。
- デモを https://novisoftware.github.io/demo/Hakoiri/ に置いています。
- 「大家族版」の他に、箱入り娘、将棋パズル、華容道パズルを追加しました(6.29)。
- 詳しくはWikipediaの[箱入り娘](https://ja.wikipedia.org/wiki/%E7%AE%B1%E5%85%A5%E3%82%8A%E5%A8%98_(%E3%83%91%E3%82%BA%E3%83%AB))を参照してください。
- 以降の執筆はほぼGitHub Copilotにお任せしています。


このプロジェクトは「箱入り娘」という和製のパズルゲームをReactで実装したアプリケーションです。ユーザーはパズルピースをボード上に配置し、ゲームを楽しむことができます。

## 構成ファイル

- `src/defs/boards/`: 盤面データの定義。
- `src/components/Board.tsx`: ゲームボードを表示し、ボードの状態を管理するコンポーネント。
- `src/components/PuzzlePiece.tsx`: 個々のパズルピースを表すコンポーネント。
- `src/components/Header.tsx`: アプリケーションのヘッダーを表示するコンポーネント。
- `src/App.tsx`: アプリケーションのメインコンポーネントで、ボードとヘッダーを組み合わせます。
- `src/index.tsx`: アプリケーションのエントリーポイントで、ReactアプリをDOMにマウントします。
- `src/styles/App.css`: アプリケーション全体のスタイルを定義します。
- `public/index.html`: アプリケーションのHTMLテンプレート。
- `tsconfig.json`: TypeScriptの設定ファイル。
- `package.json`: npmの設定ファイル。

## セットアップ手順

1. リポジトリをクローンします。
   ```
   git clone リポジトリのURL
   ```

2. プロジェクトディレクトリに移動します。
   ```
   cd hakoniwa-react-app
   ```

3. 依存関係をインストールします。
   ```
   npm install
   ```

4. アプリケーションを起動します。
   ```
   npm start
   ```

ブラウザで `http://localhost:3000` にアクセスして、アプリケーションを楽しんでください！
