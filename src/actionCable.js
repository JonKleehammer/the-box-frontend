import { createConsumer } from "@rails/actioncable"


let cable = null
let connection = null

export function connectActionCable(userID) {
  if (!cable)
    cable = createConsumer('ws://localhost:3000/cable')

  if (!connection) {
    connection = cable.subscriptions.create('LobbyChannel', {
      connected() {
        console.log('ActionCable connected')
      },
      disconnected() {
        console.log('ActionCable disconnected')
      },
      received(data) {
        console.log(data)
      }
    })
  }
}

export function disconnectActionCable() {
  if (connection) {
    connection.unsubscribe()
    connection = null
  }
}