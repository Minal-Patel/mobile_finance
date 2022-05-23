import { addLoan } from '../utility/Firebase/loan'

export const loanadd = (title, amount, intrest, type, navigation) => {
    const res = addLoan(title, amount, intrest, type)
    return res

}