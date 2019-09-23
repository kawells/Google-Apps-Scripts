function getStatusCode(url){
   var options = {
     'muteHttpExceptions': true,
     'followRedirects': false
   };
   var url_trimmed = url.trim();
   var response = UrlFetchApp.fetch(url_trimmed, options);
   return response.getResponseCode();
}
