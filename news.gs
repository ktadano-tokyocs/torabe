/**
 * とらべ LP お知らせ管理スクリプト
 *
 * 【スプレッドシートの列構成】
 * A列: 日付       例: 2026/06/16
 * B列: タイトル   例: 夏の体験会のお知らせ
 * C列: 概要       例: 7月に体験会を開催します（任意）
 * D列: リンクURL  例: https://note.com/... （任意・空欄可）
 * E列: 公開       TRUE = 表示 / FALSE = 非表示（下書き）
 *
 * 【デプロイ手順】
 * 1. このファイルをGASエディタに貼り付けて保存（Ctrl+S）
 * 2. 右上「デプロイ」→「新しいデプロイ」をクリック
 * 3. 種類の選択: ウェブアプリ
 * 4. 説明: 任意（例: とらべ ニュース API）
 * 5. 次のユーザーとして実行: 自分
 * 6. アクセスできるユーザー: 全員
 * 7. 「デプロイ」→ Googleアカウントで認証 → 完了
 * 8. 表示されたウェブアプリURLをコピーして
 *    index.html の GAS_NEWS_URL に貼り付ける
 */

function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // 1行目はヘッダーなのでスキップ
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
