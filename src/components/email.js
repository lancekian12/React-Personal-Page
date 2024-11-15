import emailjs from "emailjs-com";

export const sendEmail = (templateParams) => {
  return emailjs.send(
    "gmail", // your EmailJS service ID
    "contact_template", // your template ID
    templateParams, // parameters to be passed to the template
    "service_n6rhgko" // your EmailJS user ID (API key)
  );
};
