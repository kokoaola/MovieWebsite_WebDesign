

window.addEventListener('load', () => {
  // 日本語の日付配列の定数
  const WEEK_STR_LIST = ["日", "月", "火", "水", "木", "金", "土"];

  // スワイパーのタブの要素を配列で取得
  const SWIPER_TAB_LIST = document.querySelectorAll('.tab');


  // 日付クラスから必要な変数を定数を取得
  const tabDay = new Date();
  const month = tabDay.getMonth() + 1;
  const startDate = tabDay.getDate();
  const theDay = tabDay.getDay();

  //戻り値はgetDayWeekStrに格納される
  // const getDayWeekStr = (i) => {
  //   // 計算結果を配列内に収める
  //   const strIndex = (startDate + i - 2) % WEEK_STR_LIST.length;
  //   return WEEK_STR_LIST[strIndex];
  // }


  //タブの表示
  let date = startDate;
  SWIPER_TAB_LIST.forEach((tab, i) => {
    date = startDate + i;
    const index = (theDay + i) % 7;
    // 要素のコンテンツ
    // tab.textContent = `${month} / ${date}
    tab.innerHTML = `${month} / ${date}<br>(${WEEK_STR_LIST[index]})`;
  })


  // スケジュール内のp要素を配列で取得
  const scheduleText = document.querySelectorAll('.scheduleText');
  scheduleText.forEach((str, i) => {

    // 要素のコンテンツ
    // tab.textContent = `${month} / ${date}
    i -= 1

    if (i === 0) {
      str.textContent = `本日の上映スケジュール`;
    } else {
      date = startDate + i;
      str.textContent = `${month} / ${date}の上映スケジュール`;
    }

  })
})


