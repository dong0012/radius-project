import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, DropdownItem, Dropdown, DropdownTrigger, DropdownMenu } from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";
import { siteConfig } from '../config/site'
import { ChevronDown } from './icons'
import NextLink from 'next/link';

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];


export const Header = () => {

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
              <Link color="foreground" href={item.href} >
                {item.label}
              </Link>
            </NavbarItem>
          ))
        }
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                endContent={<ChevronDown fill="currentColor" size={16} />}
                variant="light"
              >
                SERVICES
              </Button>
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
                >
                  <Link href={item.href}>{item.label}</Link>
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
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
                  
                 <Link color="foreground" size="lg" 
                 className="mr-2">
                 SERVICE  <ChevronDown fill="currentColor" size={16} />
               </Link>
                 </DropdownTrigger>
                 <DropdownMenu
                   aria-label="Services"
                   className="w-[340px]"
                   itemClasses={{
                     base: "gap-4",
                   }}
                 >
                   {siteConfig.navMenuItems.map((subItem) => (
                     <DropdownItem key={subItem.label}>
                       <Link href={subItem.href}>{subItem.label}</Link>
                     </DropdownItem>
                   ))}
                 </DropdownMenu>
               </Dropdown>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
};
