import { Linking, Platform } from "react-native";

const sendWhatsApp = (message, tlfn = "") => {
  // Corregido: declaración correcta
  let msg = message;
  let phoneWithCountryCode = tlfn.replace(/[^0-9]/g, ""); // Eliminar caracteres no numéricos

  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url =
        "whatsapp://send?text=" + encodeURIComponent(msg) + "&phone=" + mobile;
      Linking.openURL(url)
        .then((data) => {
          console.log("WhatsApp Opened");
        })
        .catch(() => {
          alert("Make sure WhatsApp installed on your device");
        });
    } else {
      alert("Please insert message to send");
    }
  } else {
    alert("Please insert mobile no");
  }
};

export { sendWhatsApp };
