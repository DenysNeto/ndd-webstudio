export const handleFacebookClick = () => {
  var usernameOrUserId = "Enjoy-epil";
  // Generate the Facebook link
  var facebookLink = "https://www.facebook.com/" + usernameOrUserId;

  openInNewTab("https://www.facebook.com/profile.php?id=61559538557415");
};

export const handleInstagramClick = () => {
  var username = "ndd.webstudio/";
  var instagramLink = "https://www.instagram.com/" + username;
  openInNewTab(instagramLink);
};

export const handleWhatsappClick = () => {
  var phoneNumber = "+972534298280";
  var message = "";
  var whatsappLink =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  openInNewTab(whatsappLink);
};

export const handlePhoneClick = (phone) => {
  openInNewTab(`tel:${phone}`);
};

export const handleTelegramClick = () => {
  console.log("TELEGRAMM");
  var usernameOrPhone = "+972534298280";
  var message = "";
  var telegramLink = "https://t.me/" + usernameOrPhone;
  if (message) {
    telegramLink += "?text=" + encodeURIComponent(message);
  }
  openInNewTab(telegramLink);
};

export const handleEmailClick = () => {
  openInNewTab(
    "https://mail.google.com/mail/u/0/?fs=1&to=ndd.webstudio@gmail.com&tf=cm"
  );
};

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.focus();
  } else {
    console.error("Popup blocked. Please allow popups for this site.");
  }
};
