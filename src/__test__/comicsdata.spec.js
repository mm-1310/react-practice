import React from "react"
import { render } from '@testing-library/react'
import { ComicsData } from "../components/ComicsData"

it('comics module should render', async () => {
    render(<ComicsData />)
})

