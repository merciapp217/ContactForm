function getForm(e) {
  var itemResponses = e.response.getItemResponses();
  
  var message = '';
  for (var i = 0; i < itemResponses.length; i++) {
    var itemResponse = itemResponses[i];
    var question = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();
    message += (i + 1).toString() + '. ' + question + ': ' + answer + '\n';
  }
  
  /* send_mail */
  var from = 'merciapp217@gmail.com';
  var to = 'merciapp217@gmail.com';
  var retern = e.response.getRespondentEmail();
  var title = 'お問い合わせが送信されました。';
  var content = "下記の内容で、お問い合わせが送信されました。\n"
    + message
    + '\n回答者のメールアドレス：'
    + retern
    + '\n'
    + '※このメールはGoogleフォームからの自動送信メールです。';
  var options = { from: from, name: 'お問い合わせフォーム' };

  GmailApp.sendEmail(to,title,content,options);
}
