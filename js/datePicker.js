
var temp = true;
//是否選擇中狀態
function select() {
  temp = !temp;
  !temp ? dateChoose.innerText = "選擇中..." : chose();
};
//換字
function chose() {
  !yearSelect.value || !monthSelect.value || !daySelect.value ?
    dateChoose.innerText = "請選擇日期" :
    dateChoose.innerText = `${yearSelect.value}年${monthSelect.value}月${daySelect.value}日`;
};
//塞年月日選項
function createOption(start, end, select) {
  for (let i = start; i <= end; i++) {
    let options = document.createElement('option');
    options.value = i;
    options.text = i;
    select.add(options);
  }
};
//判斷空白處
function notId(e, text) {
  let id = e.target.id;
  if (id != yearSelect.id && id != monthSelect.id && id != daySelect.id) {
    temp = true;
    chose();
    console.log(text);
  }
};
//取得天數
function getDays(select) {
  select.addEventListener("change", function () {
    if (yearSelect.value && monthSelect.value) {
      let days = new Date(yearSelect.value, monthSelect.value, 0).getDate();
      daySelect.options.length = 1;
      createOption(1, days, daySelect);
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const yearSelect = document.getElementById('yearSelect');
  const monthSelect = document.getElementById('monthSelect');
  const daySelect = document.getElementById('daySelect');
  const dateChoose = document.getElementById('dateChoose');
  dateChoose.innerText = "請選擇日期";
  createOption(2010, 2025, yearSelect);
  createOption(1, 12, monthSelect);
  yearSelect.addEventListener("click", select);
  document.addEventListener("click", function (e) {
    notId(e, "外面")
  });
  window.addEventListener("mousewheel", function (e) {
    notId(e, "滾輪")
  });
  getDays(yearSelect);
  getDays(monthSelect);
  monthSelect.addEventListener("click", function () {
    !yearSelect.value ?
      alert("請先選擇年份") :
      select();
  });
  daySelect.addEventListener("click", function () {
    !yearSelect.value ?
      alert("請先選擇年份") :
      !monthSelect.value ?
        alert("請先選擇月份") :
        select();
  });
});


