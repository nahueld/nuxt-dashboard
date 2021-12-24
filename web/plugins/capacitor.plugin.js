import { Toast } from '@capacitor/toast'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

defineCustomElements(window)

export default function (_, inject) {
  inject('Toast', Toast)
}
