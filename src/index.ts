import Swal, { SweetAlertResult, SweetAlertIcon } from "sweetalert2";

export default class SweetalertService {
  showErrorMessage(title: string, message: string, redirect = "") {
    return this.showAlert(title, message, redirect, "error");
  }

  showInfoMessage(title: string, message: string, redirect = "") {
    return this.showAlert(title, message, redirect, "info");
  }

  showSuccessMessage(title: string, message: string, redirect = "") {
    return this.showAlert(title, message, redirect, "success");
  }

  showConfirmMessage(
    title: string = "Confirm",
    message: string,
    critical: boolean = false,
    criticalMessage: string = "Do you want to continue?"
  ): any {
    return Swal.fire({
      title,
      html: `
      <div class="text-center">
        <div>${title}</div>
        <div>${message}</div>
        ${critical ? "<div><b>" + criticalMessage + "</b></div>" : ""}
      </div>`,
      icon: "question",
      showCancelButton: false
    }).then(confirm => {
      if (confirm) {
        return "continue";
      }
    });
  }

  showPleaseWait(message: string) {
    Swal.fire({
      html: `${message} Please wait <i class="fa fa-spinner fa-spin"></i>`,
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false
    });
  }

  showAlert(
    title: string,
    message: string,
    redirect: string = "",
    type: SweetAlertIcon
  ) {
    return Swal.fire({
      title,
      text: message,
      icon: type,
      showCancelButton: false
    });
  }
}
