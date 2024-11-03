'use client'

import * as React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/LogoTransparent_processed.jpeg'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#services', label: 'Serviços' },
  { href: '#team', label: 'Equipe' },
  { href: '#contact', label: 'Contato' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#142455] via-[#142455e6] to-[#1d3a73e6] text-white bg-opacity-90">
      {' '}
      <div className="mx-auto max-w-[1200px] px-[10px]">
        <div className="flex h-auto items-center justify-between">
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex flex-row justify-start items-center">
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} width={150} />
                <span className="text-xl font-bold text-[#ffb26b] hidden">
                  RLFOCUS
                </span>
              </a>
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-[#1e357e] disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-[#1e357e] data-[state=open]:bg-[#1e357e] h-10 py-2 px-4 group w-max',
                        'text-[#ffffff] hover:text-[#ffcd9e]',
                      )}
                      asChild
                    >
                      <Link to={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#ffb26b]">RLFOCUS</span>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 text-base hover:bg-[#1e357e] focus-visible:bg-[#1e357e] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] bg-[#142455] text-white"
              >
                <div className="flex flex-col space-y-4 mt-4">
                  <Link to="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-[#ffb26b]">
                      RLFOCUS
                    </span>
                  </Link>
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-[#ffffff] hover:text-[#ffcd9e] text-4xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
