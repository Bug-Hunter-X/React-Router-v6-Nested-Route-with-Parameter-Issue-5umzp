# React Router v6 Nested Route Parameter Issue

This repository demonstrates a problem encountered when using nested routes with parameters in React Router v6.  The `Contact` component, intended to handle routes like `/contact/123`, fails to render correctly.

## Problem
The provided code uses `react-router-dom` v6.  Navigating to `/contact` works, but adding a parameter (e.g., `/contact/123`) breaks the rendering of the `Contact` component.  The issue appears to be related to how the `*` wildcard interacts with nested routes and parameters.

## Solution
The solution involves refactoring the route structure to use a specific path parameter instead of the wildcard `*` for the nested route.  This change ensures the correct rendering of the `Contact` component in all cases.