import type { dataType } from '~/pages/convocation/components/types'

import product11 from '~/assets/images/products/product-1(1).png'
import product2 from '~/assets/images/products/product-2.png'
import product3 from '~/assets/images/products/product-3.png'
import product4 from '~/assets/images/products/product-4.png'
import product5 from '~/assets/images/products/product-5.png'
import product6 from '~/assets/images/products/product-6.png'
import product12 from '~/assets/images/products/product-1(2).png'

export const data: dataType = {
  header: ['Postulado', 'Estado', 'Acciones'],
  body: [
    {
      id: 1001,
      product: {
        image: product11,
        name: 'Persona 1',
        caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      category: 'Computer',
      price: '240.59',
      inventory: 'active'
    },
    {
      id: 1002,
      product: {
        image: product2,
        name: 'Persona 2',
        caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      category: 'Camera',
      price: '135.99',
      inventory: 'active'
    },
    {
      id: 1003,
      product: {
        image: product3,
        name: 'Persona 3',
        caption: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      category: 'Headphones',
      price: '99.49',
      inventory: 'in-process'
    },
    {
      id: 1004,
      product: {
        image: product4,
        name: 'Persona 4',
        caption: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      category: 'Mobile',
      price: '27.59',
      inventory: 'deactivated'
    }
  ]
}
