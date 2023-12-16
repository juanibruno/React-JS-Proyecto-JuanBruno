
import { OpcionesMenu } from "../Mock/data"

export const pedirMenu = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (OpcionesMenu)
        }, 3000)
    })

}