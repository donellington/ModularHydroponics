import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Login',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/Recipes',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Data',
    path: '/SensorData',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Pods',
    path: '/Pods',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
    {
    title: 'Settings',
    path: '/Settings',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
    {
    title: 'About Us',
    path: '/AboutUs',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];