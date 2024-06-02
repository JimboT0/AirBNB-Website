"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { getSizeName } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import { PortableText } from '@portabletext/react';

interface Props {
  product: SanityProduct
}

export function ProductInfo({product}: Props) {

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Content</h3>
        
        <PortableText value={product.content} />
      </div>

      <div className="mt-4">

      </div>

    </div>
  )
}
