import { z } from 'zod'

export const checkoutSchema = z
  .object({
    firstName: z.string().trim().min(2, 'First name must be at least 2 characters'),

    lastName: z.string().trim().min(2, 'Last name must be at least 2 characters'),

    email: z.string().trim().email('Enter a valid email'),

    // phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid phone number'),

    address: z.string().min(10, 'Address is too short'),

    city: z.string().min(2),

    // state: z.string().min(2),

    postalCode: z.string().regex(/^\d{6}$/, 'Invalid postal code'),

    paymentMethod: z.enum(['card', 'upi', 'cod']),

    cardNumber: z
      .string()
      .regex(/^\d{16}$/, 'Invalid card number')
      .refine(isValidCardNumber, 'Invalid card number'),

    expiry: z.string().length(5, 'Invalid expiry'),

    cvv: z.string().length(3, 'Invalid CVV'),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod !== 'card') return

    if (data.cardNumber.length !== 16) {
      ctx.addIssue({
        path: ['cardNumber'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid card number',
      })
    }

    if (!/^\d{2}\/\d{2}$/.test(data.expiry)) {
      ctx.addIssue({
        path: ['expiry'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid expiry',
      })
    }

    if (!/^\d{3}$/.test(data.cvv)) {
      ctx.addIssue({
        path: ['cvv'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid CVV',
      })
    }
  })

function isValidCardNumber(number) {
  let sum = 0
  let shouldDouble = false

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i])

    if (shouldDouble) {
      digit *= 2
      if (digit > 9) digit -= 9
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 === 0
}
