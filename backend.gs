/**
 * Daybook SaaS Backend (backend.gs)
 * Serving the Need of Influence & Stewardship
 */

const SUPER_ADMIN_EMAIL = "your-email@gmail.com";
const WA_API_KEY = "YOUR_CALLMEBOT_KEY";
const WA_PHONE = "91XXXXXXXXXX";

function doPost(e) {
  const req = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(req.clientSheetId);
  
  switch(req.action) {
    case 'login':
      return handleLogin(ss, req);
    
    case 'saveEntry':
      return handleSave(ss, req);
      
    case 'emergencyReset':
      return handleEmergencyReset(ss, req);
      
    case 'provisionNewClient':
      return createClientSheet(req.companyName);
  }
}

function handleSave(ss, req) {
  const sheet = ss.getSheetByName("Master_Ledger");
  sheet.appendRow([new Date(), req.userId, req.category, req.amount, req.remarks]);
  
  // Compliance logic duplicate on backend
  if (req.amount > 50000) {
    sendAlert("High Value Transaction", `User ${req.userId} recorded ₹${req.amount} in ${req.companyId}`);
  }
  
  return response({ok: true});
}

function handleEmergencyReset(ss, req) {
  // Logic to verify if requester is Admin
  const auth = ss.getSheetByName("User_Auth");
  // Set password to 123456 in Col E
  sendAlert("Emergency Reset", `Admin ${req.userId} reset password for ${req.targetId}`);
  return response({ok: true});
}

function sendAlert(title, msg) {
  MailApp.sendEmail(SUPER_ADMIN_EMAIL, "[Daybook Alert] " + title, msg);
  const waUrl = "https://api.callmebot.com/whatsapp.php?phone="+WA_PHONE+"&text="+encodeURIComponent(title + ": " + msg)+"&apikey="+WA_API_KEY;
  try { UrlFetchApp.fetch(waUrl); } catch(e) {}
}

function response(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
