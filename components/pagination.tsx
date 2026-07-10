'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type PaginationIconsOnlyProps = {
  currentPage: number
  hasNextPage: boolean
}

export function PaginationIconsOnly({
  currentPage,
  hasNextPage,
}: PaginationIconsOnlyProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleSelectChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("limit", value)
    params.set("page", "1")
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
        <Select
          defaultValue={searchParams.get("limit") ?? "25"}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={currentPage <= 1}
              className={
                currentPage <= 1 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) goToPage(currentPage - 1)
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              aria-disabled={!hasNextPage}
              className={
                !hasNextPage ? "pointer-events-none opacity-50" : undefined
              }
              onClick={(e) => {
                e.preventDefault()
                if (hasNextPage) goToPage(currentPage + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
