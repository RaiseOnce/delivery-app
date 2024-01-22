'use client'

import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { useFetching } from '@/hooks/useFetching'
import ProductIdService from '@/api/ProductIdService'

type PageId = {
  params: {
    id: string
  }
}

export const generateMetaData = ({ params }: PageId): Metadata => {
  return {
    title: `${params.id}`,
  }
}

const ProductPost = ({ params }: PageId) => {
  const id = Number(params.id)

  const [product, setProduct] = useState<any>({})

  const [getMenu, isLoading, error] = useFetching(async () => {
    const response = await ProductIdService.getAll(id)
    setProduct(response.data)
  })

  useEffect(() => {
    getMenu()
  }, [])

  return <div>{product.id}</div>
}

export default ProductPost
