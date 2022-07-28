import { NavItem } from '../components';
import {
  HouseIcon,
  MemberIcon,
  SocialMediaIcon,
  NoteIcon,
  ExitIcon,
} from 'components';

const Nav: React.FC = () => {
  return (
    <nav
      className='bg-primary-gray w-76 py-16 border-r border-t border-b border-good-gray rounded-r-2xl'
      data-testid='dashboard-nav'
    >
      <ul className='flex flex-col'>
        <NavItem to='/band/main'>
          <HouseIcon />
          <span className='mt-[6px] ml-4'>მთავარი</span>
        </NavItem>
        <NavItem to='/band/members?page=1'>
          <MemberIcon />
          <span className='mt-[6px] ml-4'>ჯგუფის წევრები</span>
        </NavItem>
        <NavItem to='/band/social-media'>
          <SocialMediaIcon />
          <span className='mt-[6px] ml-4'>სოციალური ბმულები</span>
        </NavItem>
        <NavItem to='/band/about'>
          <NoteIcon />
          <span className='mt-[6px] ml-4'>ბენდის შესახებ</span>
        </NavItem>
        <NavItem to='/'>
          <ExitIcon />
          <span className='mt-[6px] ml-4'>გადი გარეთ</span>
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
