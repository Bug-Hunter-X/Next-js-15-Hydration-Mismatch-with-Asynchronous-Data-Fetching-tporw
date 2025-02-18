# Next.js 15 Hydration Mismatch Bug Report

This repository demonstrates a hydration mismatch bug in Next.js 15 when fetching asynchronous data. The bug occurs because the About page attempts to render data from an API call before the data is available, resulting in a discrepancy between the client-side and server-side rendering.

## Bug Description

A hydration mismatch occurs in the `About` page when the asynchronous API call hasn't completed before rendering.  This mismatch is due to the `data` variable being a Promise rather than the resolved data.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the hydration mismatch error in the browser's console.

## Solution

The solution involves using techniques to handle the asynchronous data fetching properly.  This can be done using suspense, loading states, or other approaches to prevent rendering until the data is ready.
