<?php
// フォームから送信されたデータを取得する
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// メールの送信先と送信元を指定する
$to = "宛先のメールアドレス";
$from = "送信元のメールアドレス";

// 件名と本文を作成する
$subject = $subject;
$body = "お名前: $name\nメールアドレス: $email\n\nメッセージ:\n$message";

// ヘッダーを作成する
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// メールを送信する
if (mail($to, $subject, $body, $headers)) {
  // メール送信に成功した場合の処理
  echo "メールを送信しました";
} else {
  // メール送信に失敗した場合の処理
  echo "メールの送信に失敗しました";
}
