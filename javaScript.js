  //  /* ハンバーガーメニュー
  //  .menu-btn {
  //    /* 場所を右上に固定する */
  //    position: fixed;
  //    right: 0;
  //    top: 0;

  //    /* サイズの調整を可能にする */
  //    display: flex;
  //    width: 48px;
  //    height: 48px;

  //    /* 背景色 */
  //    background: gray;
  //    z-index: 1001;
  //    /* 3本線（span）を子要素にして、ボックスの中央に持ってくる */
  //    justify-content: center;
  //    align-items: center;
  //    z-index: 2;
  //    border-radius: 5px;
  //  }

  //  /* ３本線の共通の項目 */
  //  /* span＝中央の線 */
  //  .menu-btn span,
  //  .menu-btn span::before,
  //  .menu-btn span::after {
  //    transition: 0.5s;
  //    content: '';
  //    display: block;
  //    position: absolute;
  //    width: 25px;
  //    height: 3px;
  //    background: #ffffff;
  //    border-radius: 10px;
  //  }

  //  /* spanの要素内側の行頭に要素を挿入する（１本目の線） */
  //  .menu-btn span::before {
  //    bottom: 8px;
  //  }

  //  /* spanの要素内側の行尾に要素を挿入する */
  //  .menu-btn span::after {
  //    top: 8px;
  //  }

  //  #menu-btn-check {
  //    outline: 5px solid red;
  //  }

  //  /* IDmenu-btn-checkにチェックが入っているときに限り、弟要素の中にあるspanに適応 */
  //  #menu-btn-check:checked~.menu-btn span {
  //    background-color: rgba(255, 255, 255, 0);
  //  }

  //  #menu-btn-check:checked~.menu-btn span::before {
  //    bottom: 0;
  //    transform: rotate(45deg);
  //  }

  //  #menu-btn-check:checked~.menu-btn span::after {
  //    top: 0;
  //    transform: rotate(-45deg);
  //  }

  //  /* メニューが右から出現する */
  //  /* gnavクラスの中にあるIDmenu-btn-checkがチェックされたときに限り、弟要素のulに */
  //  .gnav #menu-btn-check:checked~ul {
  //    left: 0;
  //    transition: 0.5s;
  //  }


  //  /* チェックボックスを見えなくする */
  //  #menu-btn-check {
  //    display: none;
  //  }


  //  /* ここからナビ */
  //  .gnav ul {
  //    background: white;
  //    position: fixed;
  //    top: 0;
  //    left: 100%;
  //    bottom: 0;
  //    width: 50%;
  //    height: 100%;
  //    transition: all 0.5s;
  //    /* 配置を最前面に持ってくる（デフォルトは０、後ろに置きたいときはマイナス、前はプラス） */
  //    z-index: 1;
  //    flex-direction: column;

  //    /* ナビメニューの内容を中央に配置 */
  //    justify-content: center;
  //    align-items: center;
  //    padding: 0;
  //  }

  //  .gnav #menu-btn-check:checked~ul {
  //    left: 50%;
  //  }

  //  /* タッチ領域を画面いっぱいに広げる */
  //  .gnav li {
  //    width: 100%;
  //  }

  //  /* ナビゲーション内の文字を左揃え */
  //  .gnav a {
  //    text-align: left;
  //    padding-left: 20px;
  //  }


  //  /* ヘッダー・グローバルナビゲーションを上書き */
  //  .header {
  //    height: 100vh;
  //  }

  //  /* デザインを整えるためのボーダー（画像の下の境界） */
  //  .gnav {
  //    border-bottom: 1px solid #d8c7a0;
  //  } */
