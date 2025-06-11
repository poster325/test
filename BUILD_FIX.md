# Build Error Fix - Duplicate Link Declaration

## Issue

The build was failing with the error:

```
TypeError: Duplicate declaration "Link"
```

## Root Cause

In `src/pages/Portfolio.tsx`, there were two declarations of "Link":

1. **Import from react-router-dom** (line 2):

   ```typescript
   import { Link } from "react-router-dom";
   ```

2. **Styled component declaration** (line 167):
   ```typescript
   const Link = styled.a`
   ```

This created a naming conflict where JavaScript/TypeScript couldn't distinguish between the two.

## Solution Applied

✅ **Renamed the styled component** from `Link` to `StyledLink`:

```typescript
// Before:
const Link = styled.a`
  color: var(--primary-color);
  // ... styles
`;

// After:
const StyledLink = styled.a`
  color: var(--primary-color);
  // ... styles
`;
```

✅ **Updated usage** in the JSX:

```typescript
// Before:
<Link href={`#article-${article.id}`}>Read Full Article →</Link>

// After:
<StyledLink href={`#article-${article.id}`}>Read Full Article →</StyledLink>
```

## Status

🟢 **Fixed** - The duplicate declaration error should now be resolved.

## Other Components Using Link

- `BinderCard` correctly uses `styled(Link)` where `Link` refers to the react-router-dom import
- `BackLink` in BinderDetail.tsx correctly uses `styled(Link)` as well
- No other naming conflicts detected

The build should now complete successfully.
