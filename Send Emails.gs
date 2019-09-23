function sendEmails() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setActiveSheet(ss.getSheetByName("Dashboard"));
  var sheet = SpreadsheetApp.getActiveSheet();
  var emaildataRange = sheet.getRange("C2:C4");
  //get email addresses
  var emaildata = emaildataRange.getValues();
  var messagedataRange = sheet.getRange("F2:H5");
  //get statuses
  var messagedata = messagedataRange.getValues();
  var emailcount = messagedata[0][0] + ": " + messagedata[0][1] + '\n' + "Note: " + messagedata[0][2] + '\n';
  Logger.log(emailcount);
  var voicemailcount = messagedata[1][0] + ": " + messagedata[1][1] + '\n' + "Note: " + messagedata[1][2] + '\n';
  Logger.log(voicemailcount);
  var callscount = messagedata[2][0] + ": " + messagedata[2][1] + '\n' + "Note: " + messagedata[2][2] + '\n';
  Logger.log(callscount);
  var websitecount = messagedata[3][0] + ": " + messagedata[3][1] + '\n' + "Note: " + messagedata[3][2] + '\n';
  Logger.log(websitecount);
  //combine statuses into single email body
  var message = emailcount + '\n' + voicemailcount + '\n' + callscount + '\n' + websitecount;
  Logger.log(message);

  //send emails to recipients
  for (i in emaildata) {
    var rowData = emaildata[i];
    var emailAddress = rowData[0];
    var subject = 'On-Call Update';
    MailApp.sendEmail(emailAddress, subject, message);
  }
}
