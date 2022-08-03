import { Fragment } from 'react';

import { DashboardHeader } from 'components';
import { BandEditForm } from './components';
import { Link } from 'react-router-dom';

const BandEdit: React.FC = () => {
  return (
    <Fragment>
      <DashboardHeader>ბენდის შესახებ - დაარედაქტირე</DashboardHeader>
      <BandEditForm />
      <Link
        to='../about'
        className='text-form-go-back-link mt-5 text-lg font-bold font-nino-mtavruli underline'
      >
        გადი უკან
      </Link>
    </Fragment>
  );
};

export default BandEdit;
