type TableHeaderType = string[]

export type dataType = {
  header: TableHeaderType
  body: {
    id: number
    product: {
      image: string
      name: string
      caption: string
    }
    category: string
    price: string
    inventory: 'active' | 'in-process' | 'deactivated'
  }[]
}
