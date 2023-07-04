//ナビゲーションをクリックした時にハンバーガーメニューを閉じる
//JavaScriptバージョン

// ナビゲーションの中にある全てのa要素を取得
const elements = document.querySelectorAll('#gnav a');
// チェックボックスのinput要素を取得
const input = document.getElementById('menu-btn-check');

// 取得した全てのa要素をひとつずつ順番に処理する
Array.prototype.forEach.call(elements, element => {
  // a要素をクリックしたとき
  element.onclick = function () {
    // チェックボックスをOFFにする
    input.checked = false;
  };
});