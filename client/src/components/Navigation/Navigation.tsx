'use client'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/Logo.png'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/#home', label: 'Página Inicial' },
  { href: '/#about', label: 'Sobre Nós' },
  { href: '/#services', label: 'Serviços' },
  { href: '/#team', label: 'Equipe' },
  { href: '/#contact', label: 'Contato' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const navigate = useNavigate()

  const handleNavigation = (href: string) => {
    const [path, hash] = href.split('#')
    if (path) {
      navigate(path, { replace: false })
    }
    setTimeout(() => {
      if (hash) {
        const section = document.getElementById(hash)
        const offset = 100
        if (section) {
          const top =
            section.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }, 100)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#142455] via-[#142455e6] to-[#1d3a73e6] text-white bg-opacity-90 py-4">
      <div className="mx-auto max-w-[1200px] px-[10px]">
        <div className="flex h-auto items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex flex-row justify-start items-center">
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} width={250} height={250} alt="RLFocus Logo" />
                <span className="text-xl font-bold text-orange-300 hidden">
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
                        'inline-flex items-center justify-center rounded-md text-lg font-medium transition-colors focus:outline-none focus:bg-[#1e357e] disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-[#1e357e] data-[state=open]:bg-[#1e357e] h-10 py-2 px-4 group w-full',
                        'text-white hover:text-orange-300',
                      )}
                      asChild
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(item.href)
                      }}
                    >
                      <a className="cursor-pointer">{item.label}</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between w-full">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-orange-400">RLFOCUS</span>
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center text-xl h-12 w-12 hover:bg-orange-300 focus-visible:bg-[#1e357e] focus-visible:ring-0 focus-visible:ring-offset-0 rounded-md"
                >
                  <Menu size={40} strokeWidth={2} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] bg-[#142455] text-white"
              >
                <div className="flex flex-col space-y-4 mt-4">
                  <SheetTitle className="text-3xl font-bold text-white">
                    RLFOCUS
                  </SheetTitle>
                  <SheetDescription className="text-sm text-gray-300 hidden">
                    Navegue pelos itens do menu abaixo.
                  </SheetDescription>
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      className="text-white hover:text-orange-300 text-2xl cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(item.href)
                        setIsOpen(false)
                      }}
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
