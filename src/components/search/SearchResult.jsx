'use client';
import ReactQueryProvider from '@/customHooks/ReactQueryProvider'
import React from 'react'
import ResultList from './ResultList'

const SearchResult = ({cityId}) => {
  return (
        <ResultList cityId={cityId} />
  )
}

export default SearchResult
