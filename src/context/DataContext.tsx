import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Member, SocialMediaItem, BandDetails, WrapperProps } from 'types';
import { getMembers, getSocialMedia, getBandDetails } from 'services';

export const DataContext = createContext({
  members: [] as Member[],
  socialMedia: [] as SocialMediaItem[],
  bandDetails: {} as BandDetails,
  isLoading: false,
  updateMembers: (_: Member[]) => {},
  updateSocialMedia: (_: SocialMediaItem[]) => {},
  updateBandDetails: (_: BandDetails) => {},
});

export const DataContextProvider: React.FC<WrapperProps> = (props) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [socialMedia, setSocialMedia] = useState<SocialMediaItem[]>([]);
  const [bandDetails, setBandDetails] = useState<BandDetails>({
    info: '',
    imagePath: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const responses = await Promise.all([
          getMembers(),
          getSocialMedia(),
          getBandDetails(),
        ]);

        setIsLoading(false);

        const [members, socialMedia, bandDetails] = responses.map(
          (res) => res.data
        );

        setMembers(members);
        setSocialMedia(socialMedia);
        setBandDetails(bandDetails);
      } catch (err: any) {
        const { status } = err.response;

        if (status === 403) {
          navigate('/403');
        } else {
          navigate('/500');
        }
      }
    })();
  }, [navigate]);

  const updateMembers = (members: Member[]) => {
    setMembers(members);
  };

  const updateSocialMedia = (socialMedia: SocialMediaItem[]) => {
    setSocialMedia(socialMedia);
  };

  const updateBandDetails = (bandDetails: BandDetails) => {
    setBandDetails(bandDetails);
  };

  return (
    <DataContext.Provider
      value={{
        members,
        socialMedia,
        bandDetails,
        isLoading,
        updateMembers,
        updateSocialMedia,
        updateBandDetails,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
