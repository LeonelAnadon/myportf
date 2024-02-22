import { IFormData, IFormDataResponse } from "../interfaces/global";

export async function sendMsg(formData: IFormData) {
  try {
    if (formData.email === "") return;
    if (formData.name === "") return;
    if (formData.msg === "") return;

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/lndn/sendThis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameValue: formData.name,
        emailValue: formData.email,
        msgValue: formData.msg
      }),
    });
    const results = await response.json();

    const responseData = results as IFormDataResponse;

    if (responseData.emailValue && responseData.msgValue && responseData.nameValue) {
      return "ok";
    }
    return "error";
  } catch (err) {
    console.log(err);
    return "error";
  }
}
