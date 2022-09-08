import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {
  connect() {
    console.log('xxx')
  }
  hideModal() {
    this.element.parentElement.removeAttribute("src") // it might be nice to also remove the modal SRC
    this.element.remove()
  }
  // submitEnd(e){
  //   console.log()
  //   if (e.detail.success){
  //     this.hideModal()
  //   }
  // }
}
