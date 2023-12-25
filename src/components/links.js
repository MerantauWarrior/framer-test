'use client'

import React from "react";
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {StyledLink, StyledLinkWrapper} from "@/ui/StyledLink";

export function Links() {
  const pathname = usePathname()

  return (
    <StyledLinkWrapper>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
        <StyledLink>About</StyledLink>
      </Link>
      <Link className={`link ${pathname === '/read' ? 'active' : ''}`} href="/read">
        <StyledLink>Read</StyledLink>
      </Link>
      <Link className={`link ${pathname === '/form' ? 'active' : ''}`} href="/form">
        <StyledLink>Form</StyledLink>
      </Link>
    </StyledLinkWrapper>
  )
}
