import LogoutButton from './LogoutButton';
import { NavItem } from './index';
import {
  HouseIcon,
  MemberIcon,
  SocialMediaIcon,
  NoteIcon,
  ExitIcon,
} from './svgs';

const Nav: React.FC = () => {
  return (
    <nav
      className='bg-primary-gray w-76 py-16 border-r border-t border-b border-good-gray rounded-r-2xl'
      data-test-id='dashboard-nav'
    >
      <ul className='flex flex-col'>
        <NavItem to='/band/main'>
          <HouseIcon />
          <span className='mt-[6px] ml-4' data-test-id='link-to-main'>
            მთავარი
          </span>
        </NavItem>
        <NavItem to='/band/members?page=1'>
          <MemberIcon />
          <span className='mt-[6px] ml-4' data-test-id='link-to-members'>
            ჯგუფის წევრები
          </span>
        </NavItem>
        <NavItem to='/band/social-media'>
          <SocialMediaIcon />
          <span className='mt-[6px] ml-4' data-test-id='link-to-social-media'>
            სოციალური ბმულები
          </span>
        </NavItem>
        <NavItem to='/band/about'>
          <NoteIcon />
          <span className='mt-[6px] ml-4' data-test-id='link-to-band-about'>
            ბენდის შესახებ
          </span>
        </NavItem>
        <LogoutButton>
          <ExitIcon />
          <span className='mt-[6px] ml-4'>გადი გარეთ</span>
        </LogoutButton>
      </ul>
    </nav>
  );
};

export default Nav;
