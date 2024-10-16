import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, DropdownItem, Dropdown, DropdownTrigger, DropdownMenu }
  from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";
import { siteConfig } from '../config/site'
import { ChevronDown } from './icons'
import { useRouter } from 'next/router'

const menuItems = [
  "/radius-mapping",
  "/property-ownership",
  "/certified-affidavit",
  "/public-notice",
  "/public-hearing",
  "/notary-document",
  "/telecommunications",
];




export const Header = () => {
  const router = useRouter();

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">RADIUS</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">RADIUS</p>
        </NavbarBrand>
        {
          siteConfig.navItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.href}  >
                {item.label}
              </Link>
            </NavbarItem>
          ))
        }
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link
                disableRipple
                endContent={<ChevronDown fill="currentColor" size={16} />}
                variant="light"
                color={menuItems.includes(router.pathname) ? '' : 'foreground'}
              >
                SERVICES<ChevronDown fill="currentColor" size={16} />
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {
              siteConfig.navMenuItems.map((item, index) => (
                <DropdownItem
                  key={item.label}
                  onClick={() => router.push(item.href)} // 点击整个 DropdownItem 触发导航
                  className={`cursor-pointer ${router.pathname === item.href ? 'bg-blue-500 text-white' : ''}`}

                >
                  {item.label}
                </DropdownItem>
              ))
            }
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                router.pathname === item.href
                  ? "" // 当前页面时使用 foreground 颜色
                  : 'foreground'
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>

          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Dropdown >
            <DropdownTrigger>
              <Link size="lg"
                color={menuItems.includes(router.pathname) ? '' : 'foreground'}
                className="mr-2">
                SERVICES  <ChevronDown fill="currentColor" size={16} />
              </Link>
            </DropdownTrigger>
            <DropdownMenu
              className="w-[300px]"
              variant="flat"
            >
              {
                siteConfig.navMenuItems.map((item, index) => (
                  <DropdownItem
                    key={item.label}
                    onClick={() => router.push(item.href)} // 点击整个 DropdownItem 触发导航
                    className={`cursor-pointer ${router.pathname === item.href ? 'bg-blue-500 text-white' : ''}`}
                  >
                    {item.label}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
