import Swal, { SweetAlertResult, SweetAlertIcon } from "sweetalert2";

export class SweetalertService {
  showErrorMessage(title: string, message: string, redirect = "") {
    this.showAlert(title, message, redirect, "error");
  }

  showInfoMessage(title: string, message: string, redirect = "") {
    this.showAlert(title, message, redirect, "info");
  }

  showSuccessMessage(title: string, message: string, redirect = "") {
    this.showAlert(title, message, redirect, "success");
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
