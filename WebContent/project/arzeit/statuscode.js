/**
 * ステータスコードを保持して返す
 */

const STATUS_CODE = {
  0 : "成功",
  1 : "このIDは既に登録されています",
  2 : "IDのフォーマットが間違っています",
  3 : "ID又はパスワードが一致しません", //idがおかしい

  10 : "ID又はパスワードが一致しません", //passがおかしい
  11 : "パスワードのフォーマットが間違っています",
  12 : "確認用パスワードが一致しません",

  20 : "入力されたデータのフォーマットが一致しません",
  21 : "日付設定が不正です",
  
  30 : "USERデータが見つかりません ログインし直してください",

  40 : "サーバーで命令が解析できませんでした 管理者に連絡してください"
};

/**
 * コード番号の問い合わせに対してメッセージを返す
 * @param {*} code ステータスコード
 */
function getErrorMessage(code) {
  let message = STATUS_CODE[code];
  if(message == null) return "サーバーエラー errorcode:"+code; //定義していないコードはサーバーエラーとする
  else return message;
}