/**
 * とらべ LP お知らせ・説明会管理スクリプト
 *
 * 【スプレッドシートの列構成】
 *
 * ■ シート「お知らせ」（またはアクティブシート）
 * A列: 日付       例: 2026/06/16
 * B列: タイトル   例: 夏の体験会のお知らせ
 * C列: 概要       例: 7月に体験会を開催します（任意）
 * D列: リンクURL  例: https://note.com/... （任意・空欄可）
 * E列: 公開       TRUE = 表示 / FALSE = 非表示（下書き）
 *
 * ■ シート「説明会」
 * A列: 日付       例: 2026/06/16
 * B列: 時間       例: 19:00〜20:30
 * C列: 形式       例: オンライン / 現地
 * D列: 公開       TRUE = 表示 / FALSE = 非表示（下書き）
 *
 * 【デプロイ手順】
 * 1. このファイルをGASエディタに貼り付けて保存（Ctrl+S）
 * 2. 右上「デプロイ」→「既存のデプロイを管理」→ 編集（鉛筆アイコン）
 *    ※ 初回は「新しいデプロイ」で種類: ウェブアプリを選択
 * 3. バージョン: 「新バージョン」を選択
 * 4. 次のユーザーとして実行: 自分
 * 5. アクセスできるユーザー: 全員
 * 6. 「デプロイ」→ 認証 → 完了
 *    ※ URLは変わらないため index.html の GAS_NEWS_URL はそのままでOK
 *
 * 【呼び出し方】
 * お知らせ: GAS_NEWS_URL
 * 説明会:   GAS_NEWS_URL?type=schedule
 */

var DAYS = ['日', '月', '火', '水', '木', '金', '土'];

function doGet(e) {
  var type = (e && e.parameter && e.parameter.type) || '';

  if (type === 'schedule') {
    return getSchedule();
  }
  return getNews();
}

function getNews() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var news = data.slice(1)
    .filter(function(row) {
      return row[4] === true; // E列が TRUE の行のみ公開
    })
    .map(function(row) {
      return {
        date:    row[0] ? Utilities.formatDate(new Date(row[0]), 'Asia/Tokyo', 'yyyy/MM/dd') : '',
        title:   String(row[1] || ''),
        summary: String(row[2] || ''),
        url:     String(row[3] || '')
      };
    })
    .reverse(); // 新しい順に並び替え

  return ContentService
    .createTextOutput(JSON.stringify(news))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSchedule() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('説明会');
  var data = sheet.getDataRange().getValues();

  var items = data.slice(1)
    .filter(function(row) {
      return row[3] === true; // D列が TRUE の行のみ公開
    })
    .map(function(row) {
      var d = new Date(row[0]);
      var dateStr = row[0]
        ? Utilities.formatDate(d, 'Asia/Tokyo', 'yyyy年M月d日') + '（' + DAYS[d.getDay()] + '）'
        : '';
      return {
        date:   dateStr,
        time:   String(row[1] || ''),
        format: String(row[2] || '')
      };
    }); // 日付昇順（入力順）のまま

  return ContentService
    .createTextOutput(JSON.stringify(items))
    .setMimeType(ContentService.MimeType.JSON);
}
