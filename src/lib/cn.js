import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        '2xs',
        'heading-l',
        'heading-m',
        'heading-s',
        'heading-xs',
        'display-s',
        'display-xs',
        'body-l',
        'body-m',
        'body-s',
        'body-xs',
        'label-xl',
        'label-l',
        'label-m',
        'label-s',
        'label-xs',
      ],
      leading: ['heading'],
      tracking: ['heading'],
    },
  },
})

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
