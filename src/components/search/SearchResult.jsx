'use client';
import ReactQueryProvider from '@/customHooks/ReactQueryProvider'
import React from 'react'
import ResultList from './ResultList'

const SearchResult = ({cityId}) => {
  return (
    <ReactQueryProvider>
        <ResultList cityId={cityId} />
    </ReactQueryProvider>
  )
}

export default SearchResult
